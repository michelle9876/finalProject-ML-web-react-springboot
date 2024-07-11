package com.springboot.fp_ml_web.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "index";
    }
}
