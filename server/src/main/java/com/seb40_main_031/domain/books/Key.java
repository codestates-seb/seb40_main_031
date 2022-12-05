package com.seb40_main_031.domain.books;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Key {

    @Value("${interpark.key}")
    private String key;

    public String getKey() {
        return key;
    }
}
