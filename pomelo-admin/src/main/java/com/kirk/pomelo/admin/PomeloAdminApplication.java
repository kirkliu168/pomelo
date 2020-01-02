package com.kirk.pomelo.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.kirk.pomelo.admin"})
public class PomeloAdminApplication {

    public static void main(String[] args) {
        SpringApplication.run(PomeloAdminApplication.class, args);
    }
}
