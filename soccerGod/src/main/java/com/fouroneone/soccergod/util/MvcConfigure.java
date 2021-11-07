package com.fouroneone.soccergod.util;

import com.fouroneone.soccergod.interceptor.LoginAuthInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfigure implements WebMvcConfigurer {

//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(new LoginAuthInterceptor()).excludePathPatterns("/index.html", "/", "/user/signin", "/signup");
//
//    }
}
