package com.assignment.webassign;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.assignment.webassign.mapper")
public class WebAssignApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebAssignApplication.class, args);
    }

}
