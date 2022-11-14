package com.seb40_main_031.books.mapper;

import com.seb40_main_031.books.dto.BookResponseDto;
import com.seb40_main_031.books.entity.Book;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BookMapper {
    BookResponseDto bookToBookResponseDto(Book book);

}
