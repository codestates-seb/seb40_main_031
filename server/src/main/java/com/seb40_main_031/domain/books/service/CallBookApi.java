package com.seb40_main_031.domain.books.service;

import com.seb40_main_031.domain.books.repository.BookRepository;
import com.seb40_main_031.domain.books.Key;
import com.seb40_main_031.domain.books.entity.Book;

import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Date;
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

//    @PostConstruct
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
                bf = new BufferedReader(new InputStreamReader(url.openStream(), StandardCharsets.UTF_8));
                result = bf.readLine();

                JSONParser jsonParser = new JSONParser();
                JSONObject jsonObject = (JSONObject) jsonParser.parse(result);
                JSONArray bookInfo = (JSONArray) jsonObject.get("item");

                for (int i = 0; i < bookInfo.size(); i++) {
                    JSONObject item = (JSONObject) bookInfo.get(i);
                        Book book = new Book();
                        book.setTitle((String) item.get("title"));
                        book.setDescription((String) item.get("description"));
                        book.setPubDate(pubDateReformat((String) item.get("pubDate")));
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
//    @PostConstruct
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
                bf = new BufferedReader(new InputStreamReader(url.openStream(), StandardCharsets.UTF_8));
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
                        book.setPubDate(pubDateReformat((String) item.get("pubDate")));
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
//    @PostConstruct
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
                bf = new BufferedReader(new InputStreamReader(url.openStream(), StandardCharsets.UTF_8));
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
                        book.setPubDate(pubDateReformat((String) item.get("pubDate")));
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

    public String pubDateReformat(String pubDate) {
        String reformatDate = "";
        try{
            SimpleDateFormat dt = new SimpleDateFormat("yyyyMMdd");
            Date date = dt.parse(pubDate);
            reformatDate = new SimpleDateFormat("yyyy-MM-dd").format(date);
            return reformatDate;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return reformatDate;
    }
}
