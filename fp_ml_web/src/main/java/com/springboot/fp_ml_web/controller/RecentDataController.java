package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.dto.FactorRequestDto;
import com.springboot.fp_ml_web.service.RecentDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/recent-data")
public class RecentDataController {
    @Autowired
    private RecentDataService recentDataService;

    @PostMapping("/factors")
    public ResponseEntity<Map<String, Map<String, Object>>> getFactorsByDistrictAndService(@RequestBody FactorRequestDto requestDto){
        Map<String, Map<String, Object>> factors= recentDataService.getFactorsByDistrictAndService(requestDto);
        return ResponseEntity.ok(factors);
    }


}
