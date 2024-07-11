package com.springboot.fp_ml_web.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Heollo Controller", description = "설명")
@RestController
public class HelloController {

    @GetMapping("/api/data")
    public String test() {
        return "Hello, world!";
    }
}