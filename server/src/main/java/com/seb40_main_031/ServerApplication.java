package com.seb40_main_031;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling // scheduling 사용을 위해
@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args)  {
		SpringApplication.run(ServerApplication.class, args);

	}
}
