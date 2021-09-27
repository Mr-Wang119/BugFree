package com.fouroneone.soccergod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class SoccerGodApplication {

    public static void main(String[] args) {
        SpringApplication.run(SoccerGodApplication.class, args);
    }

}
