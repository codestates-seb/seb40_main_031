package com.seb40_main_031.books.service;

import com.seb40_main_031.books.Key;
import com.seb40_main_031.books.entity.Book;
import com.seb40_main_031.books.repository.BookRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.List;

@Service
public class CallBookApi {
    private final BookRepository bookRepository;
    private final Key key;

    public CallBookApi(BookRepository bookRepository, Key key) {
        this.bookRepository = bookRepository;
        this.key = key;
    }

    // 객체 초기화 , 객체가 생성된 후 별도의 초기화 작업을 위해 실행하는 메서드에 선언하는 어노테이션
    // 실행시 한번만 실행하고 종료된다.
    @PostConstruct
    public void saveBestSeller(){

        // bestSeller 호출 저장
        // api key 값
        String apikey = key.getKey();

        // 파싱한 JSON 결과 값을 저장할 변수를 설정
        String result = "";

        // categoryCode 도 api 로 받아오는 방법
        // categoryCode 를 배열에 담아두고 for문 돌면서 api 호출하기..?
//		int categoryCode = 100;

        int[] categoryCode = {100, 200};

        for (int j = 0; j < categoryCode.length; j++) {
            try {
                String apiUrl = "http://book.interpark.com/api/bestSeller.api?key=" +
                        apikey + "&categoryId=" + categoryCode[j] + "&output=json";
                URL url = new URL(apiUrl);

                // BufferdReader 로 제공된 원본 데이터를 저장하고, 하나의 데이터로 만든다.
                BufferedReader bf;
                bf = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));
                // 읽어온 Buffer 데이터를 readLine() 메소드로 한줄씩 읽어서 result 변수에 저장한다.
                result = bf.readLine();

                // 새로운 jsonParser를 만든다.
                JSONParser jsonParser = new JSONParser();

                // result 에서 json 형식으로 파일을 바꿔서 저장함
                JSONObject jsonObject = (JSONObject) jsonParser.parse(result);

                // 가져온 값 item 의 사이즈  = totalResults 의 값
                Long totalResult = (Long) jsonObject.get("totalResults");

                // Array 로 item 의 정보를 담는다.
                JSONArray bookInfo = (JSONArray) jsonObject.get("item");

                // List<Book>에 repository에 있는 모든 책 정보를 찾아서 담는다.
                // 새로 들어올 책과 비교를 위함
//                List<Book> findBooks = bookRepository.findAll();
                List<Book> findBooks = null;
                if(categoryCode[j] == 100 ){ findBooks = bookRepository.findAllByNationalRank();}
                if(categoryCode[j] == 200 ){ findBooks = bookRepository.findAllByForeignRank();}

                // 반복문으로 bookInfo 돌면서 item 에 하나씩 담는다.
                for (int i = 0; i < totalResult; i++) {
                    JSONObject item = (JSONObject) bookInfo.get(i);
                    // item 에서 가져온 책 정보를 넣을 book

                    // 가져 올 책의 제목과 repository의 책 제목이 중복 되는지 확인한다.
                    Book bookTitles = bookRepository.findByTitle((String) item.get("title"));
                    // 중복 된다면 저장하지 않는다.
//                    if(bookTitles != null && bookTitles.getTitle().equals(item.get("title"))) return;
                    // 중복 이 아니라면 저장한다.
//                    else
                    {
                        Book book = new Book();
                        book.setTitle((String) item.get("title"));
                        book.setDescription((String) item.get("description"));
                        book.setPubDate((String) item.get("pubDate"));
                        book.setPrice((Long) item.get("priceStandard"));
                        book.setCoverSmallUrl((String) item.get("coverSmallUrl"));
                        book.setCoverLargeUrl((String) item.get("coverLargeUrl"));
                        book.setCategoryId((String) item.get("categoryId"));
                        book.setCategoryName((String) item.get("categoryName"));
                        book.setBookPublisher((String) item.get("publisher"));
                        book.setAuthor((String) item.get("author"));
                        book.setTranslator((String) item.get("translator"));
                        book.setIsbn((String) item.get("isbn"));
                        book.setLink((String) item.get("link"));

                        // 국내도서
                        if (categoryCode[j] == 100) {
                            if (findBooks.size() > 0 && findBooks.get(i).getNationalRank().equals(item.get("rank"))) {
                                // 이전 책에는 rank를 null로 담고
                                findBooks.get(i).setNationalRank(null);
                                // 현재 책에 rank를 담는다.
                                book.setNationalRank((Long) item.get("rank"));
                            }
                            // 이전 책과 비교할게 없다면 그대로 set
                            book.setNationalRank((Long) item.get("rank"));
                        }
                        // 외국도서
                        if (categoryCode[j] == 200) {
                            if (findBooks.size() > 0 && findBooks.get(i).getForeignRank().equals(item.get("rank"))) {
                                findBooks.get(i).setForeignRank(null);
                                book.setForeignRank((Long) item.get("rank"));
                            }
                            book.setForeignRank((Long) item.get("rank"));
                        }
                        bookRepository.save(book);
                    }
                }
            } catch(Exception e)
            {
                e.printStackTrace();
            }
        }
    }

    @PostConstruct
    public void saveNewBook(){

        String apikey = key.getKey();
        String result = "";

        int[] categoryCode = {100, 200};

        for (int j = 0; j < categoryCode.length; j++) {
            try {
                String apiUrl = "http://book.interpark.com/api/newBook.api?key=" +
                        apikey + "&categoryId=" + categoryCode[j] + "&output=json";
                URL url = new URL(apiUrl);

                BufferedReader bf;
                bf = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));
                result = bf.readLine();
                JSONParser jsonParser = new JSONParser();

                JSONObject jsonObject = (JSONObject) jsonParser.parse(result);
                Long totalResult = (Long) jsonObject.get("totalResults");

                JSONArray bookInfo = (JSONArray) jsonObject.get("item");

                for (int i = 0; i < totalResult; i++) {
                    JSONObject item = (JSONObject) bookInfo.get(i);

                    Book bookTitles = bookRepository.findByTitle((String) item.get("title"));

                    if (bookTitles != null && bookTitles.getTitle().equals(item.get("title"))) return;
                    else {
                        Book book = new Book();
                        book.setTitle((String) item.get("title"));
                        book.setDescription((String) item.get("description"));
                        book.setPubDate((String) item.get("pubDate"));
                        book.setPrice((Long) item.get("priceStandard"));
                        book.setCoverSmallUrl((String) item.get("coverSmallUrl"));
                        book.setCoverLargeUrl((String) item.get("coverLargeUrl"));
                        book.setCategoryId((String) item.get("categoryId"));
                        book.setCategoryName((String) item.get("categoryName"));
                        book.setBookPublisher((String) item.get("publisher"));
                        book.setAuthor((String) item.get("author"));
                        book.setTranslator((String) item.get("translator"));
                        book.setIsbn((String) item.get("isbn"));
                        book.setLink((String) item.get("link"));

                        bookRepository.save(book);
                    }
                }
            } catch(Exception e)
            {
                e.printStackTrace();
            }
        }
    }
}
