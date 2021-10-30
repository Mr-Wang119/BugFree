package com.fouroneone.soccergod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
//如果需要多数据源 这个配置存在，当配置好了application.yml中的数据源后，就不用这句exclude的注解得了
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class SoccerGodApplication {

    public static void main(String[] args) {
        SpringApplication.run(SoccerGodApplication.class, args);
    }

}
