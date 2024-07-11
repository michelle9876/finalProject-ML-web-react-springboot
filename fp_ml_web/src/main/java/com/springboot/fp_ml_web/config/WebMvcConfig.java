package com.springboot.fp_ml_web.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")  // 허용할 Origin 설정
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // 허용할 HTTP 메소드 설정
                .allowCredentials(true);  // 클라이언트에서 쿠키를 주고받기 위해 필요한 설정
    }
}