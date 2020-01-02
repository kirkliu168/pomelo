package com.kirk.pomelo.admin.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(scanBasePackages = {"com.kirk.pomelo"}, exclude = {DataSourceAutoConfiguration.class})
public class PomeloAdminWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(PomeloAdminWebApplication.class, args);
    }
}
