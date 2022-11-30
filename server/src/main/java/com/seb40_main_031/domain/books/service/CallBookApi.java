package com.seb40_main_031.domain.books.service;

import com.seb40_main_031.domain.books.repository.BookRepository;
import com.seb40_main_031.domain.books.Key;
import com.seb40_main_031.domain.books.entity.Book;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CallBookApi {
    private final BookRepository bookRepository;
    private final Key key;

    /**
     * 1. 베스트셀러 API 호출
     *
     * @PostConstruct 실행시 한번만 실행하고 종료, 초기화 작업을 위해 선언
     */
    @PostConstruct
    public void saveBestSeller(){

        String apikey = key.getKey();
        String result = "";

        int[] categoryCode = {100, 200};

        for (int j = 0; j < categoryCode.length; j++) {
            try {
                String apiUrl = "http://book.interpark.com/api/bestSeller.api?key=" +
                        apikey + "&categoryId=" + categoryCode[j] + "&output=json";
                URL url = new URL(apiUrl);
                BufferedReader bf;
                bf = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));
                result = bf.readLine();

                JSONParser jsonParser = new JSONParser();
                JSONObject jsonObject = (JSONObject) jsonParser.parse(result);
                JSONArray bookInfo = (JSONArray) jsonObject.get("item");

                for (int i = 0; i < bookInfo.size(); i++) {
                    JSONObject item = (JSONObject) bookInfo.get(i);

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

                List<Book> findBooks = null;
                if(categoryCode[j] == 100 ){ findBooks = bookRepository.findAllByNationalRank();}
                if(categoryCode[j] == 200 ){ findBooks = bookRepository.findAllByForeignRank();}

                // 반복문으로 bookInfo 돌면서 item 에 하나씩 담는다.
                for (int i = 0; i < totalResult; i++) {
                    JSONObject item = (JSONObject) bookInfo.get(i);

                    // 가져 올 책의 제목과 repository의 책 제목이 중복 되는지 확인한다.
                    Book bookTitles = bookRepository.findByTitle((String) item.get("title"));
                    // todo: 중복 된다면 저장하지 않는 로직 재 설정 필요
                    if(bookTitles != null && bookTitles.getTitle().equals(item.get("title"))) return;
                    // 중복 이 아니라면 저장한다.
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

                        //국내도서
                        if(categoryCode[j] == 100){
                            Book findBook = bookRepository.findByNationalRank((Long)item.get("rank"));
                            if(findBook != null && findBook.getTitle().equals(book.getTitle())){
                                return;
                            } else if (findBook != null  && findBook.getTitle() != book.getTitle()) {
                                findBook.setNationalRank(null);
                                book.setNationalRank((Long)item.get("rank"));
                            } else {
                                book.setNationalRank((Long)item.get("rank"));
                            }
                            bookRepository.save(book);
                        }

                        //해외도서
                        if(categoryCode[j] == 200){
                            Book findBook = bookRepository.findByForeignRank((Long)item.get("rank"));
                            if(findBook != null && findBook.getTitle().equals(book.getTitle())){
                                return;
                            } else if (findBook != null  && findBook.getTitle() != book.getTitle()) {
                                findBook.setForeignRank(null);
                                book.setForeignRank((Long)item.get("rank"));
                            } else {
                                book.setForeignRank((Long)item.get("rank"));
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

    /**
     * 2. 신간 서적 API 호출
     */
    @PostConstruct
    public void saveNewBook() {
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
                JSONArray bookInfo = (JSONArray) jsonObject.get("item");

                for (int i = 0; i < bookInfo.size(); i++) {
                    JSONObject item = (JSONObject) bookInfo.get(i);

                    Optional<Book> optionalBook = bookRepository.findByTitle((String) item.get("title"));

                    if (optionalBook.isEmpty()) {
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
            }catch(Exception e)
                {
                    e.printStackTrace();
                }
            }
        }
    /**
     * 3. 국내 카테고리 책 API 호출
     */
    @PostConstruct
    public void saveBooks(){

        String apikey = key.getKey();
        String result = "";

        int[] categoryCode = {100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,
        122,123,124,125,126,128,129};

        for (int j = 0; j < categoryCode.length; j++) {
            try {

                String apiUrl = "http://book.interpark.com/api/search.api?key="
                        + apikey + "&query=%BD%C3%C5%A9%B8%B4&inputEncoding=euc-kr&categoryId="
                        + categoryCode[j] + "&maxResults=100&output=json";
                URL url = new URL(apiUrl);

                BufferedReader bf;
                bf = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));
                result = bf.readLine();
                JSONParser jsonParser = new JSONParser();

                JSONObject jsonObject = (JSONObject) jsonParser.parse(result);
                JSONArray bookInfo = (JSONArray) jsonObject.get("item");

                for (int i = 0; i < bookInfo.size(); i++) {
                    JSONObject item = (JSONObject) bookInfo.get(i);

                    Optional<Book> optionalBook = bookRepository.findByTitle((String) item.get("title"));

                    if (optionalBook.isEmpty()) {
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
