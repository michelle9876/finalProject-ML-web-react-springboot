package com.springboot.fp_ml_web.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(title = "fp_ml_web 스웨거",
                description = "데이터엔지니어링 30기 최종프로젝트 4조 스웨거",
                version = "v1"))
@RequiredArgsConstructor
@Configuration
public class SpringDocsConfig {

    @Bean
    public GroupedOpenApi dbOpenApi() {
        String[] paths = {"/**"};

        return GroupedOpenApi.builder()
                .group("최종 v1")
                .pathsToMatch(paths)
                .build();
    }
}
