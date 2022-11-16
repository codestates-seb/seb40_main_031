package com.seb40_main_031.books.mapper;

import com.seb40_main_031.books.dto.BookDto;
import com.seb40_main_031.books.dto.BookResponseDto;
import com.seb40_main_031.books.entity.Book;
import com.seb40_main_031.review.mapper.ReviewMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = ReviewMapper.class)
public interface BookMapper {

    BookResponseDto bookToBookResponseDto(Book book);
    List<BookDto> booksToBookDto(List<Book> book);
    List<BookResponseDto> booksToBookResponseDto(List<BookDto> bookDtos);

}
