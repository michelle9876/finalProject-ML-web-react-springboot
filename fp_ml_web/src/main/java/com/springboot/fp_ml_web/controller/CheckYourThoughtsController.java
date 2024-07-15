package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.entity.IndustryCorrelationRanking;
import com.springboot.fp_ml_web.service.IndustryCorrelationRankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class CheckYourThoughtsController {

    @Autowired
    private IndustryCorrelationRankingService service;

    @GetMapping("/industries")
    public List<String> getIndustries() {
        return service.getDistinctServiceIndustryNames();
    }

    @GetMapping("/factors")
    public List<String> getFactors() {
        return service.getDistinctFactors();
    }

    @PostMapping("/check-your-thoughts")
    public ResponseEntity<String> checkYourThoughts(@RequestBody Map<String, String> params) {
        String industry = params.get("industry");
        String factor = params.get("factor");
        String condition = params.get("condition");

        List<IndustryCorrelationRanking> results;
        if ("높으면".equals(condition)) {
            results = service.getPositiveCorrelationCoefficients("0");
        } else {
            results = service.getNegativeCorrelationCoefficients("0");
        }

        return ResponseEntity.ok("결과 데이터: " + results.size());
    }
}
