package com.kirk.pomelo.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(scanBasePackages = {"com.kirk.pomelo"}, exclude = {DataSourceAutoConfiguration.class})
public class PomeloAdminApplication {

    public static void main(String[] args) {
        SpringApplication.run(PomeloAdminApplication.class, args);
    }
}
