package com.seb40_main_031.domain.books.mapper;

import com.seb40_main_031.domain.books.dto.BookListResponseDto;
import com.seb40_main_031.domain.books.dto.BookResponseDto;
import com.seb40_main_031.domain.books.entity.Book;
import com.seb40_main_031.domain.review.mapper.ReviewMapper;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = ReviewMapper.class)
public interface BookMapper {

    BookResponseDto bookToBookResponseDto(Book book);
//    List<BookDto> booksToBookDto(List<Book> book);
    List<BookResponseDto> booksToBookResponseDto(List<Book> book);

    List<BookListResponseDto> booksToBookListResponseDto(List<Book> book);

}
