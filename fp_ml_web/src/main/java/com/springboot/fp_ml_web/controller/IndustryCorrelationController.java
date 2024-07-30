package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.entity.IndustryCorrelation;
import com.springboot.fp_ml_web.service.IndustryCorrelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/industry-correlations")
public class IndustryCorrelationController {
    @Autowired
    private IndustryCorrelationService industryCorrelationService;

//    @GetMapping("/top5-factors")
//    public ResponseEntity<List<IndustryCorrelation>> getTop5Factors(@RequestParam String serviceIndustryName) {
//        List<IndustryCorrelation> top5Factors = industryCorrelationService.getTop5Factors(serviceIndustryName);
//        return ResponseEntity.ok(top5Factors);
//    }

//    @GetMapping("/{ranking}")
//    public ResponseEntity<List<IndustryCorrelation>> getCorrelationsByRanking(@PathVariable int ranking) {
//        List<IndustryCorrelation> correlations = industryCorrelationService.getTop5CorrelationsByRank(ranking);
//        return ResponseEntity.ok(correlations);
//    }
    @GetMapping("/{ranking}/{serviceIndustryName}")
    public ResponseEntity<Map<String, Object>> getCorrelationsByRankingAndServiceIndustryName(
            @PathVariable int ranking,
            @PathVariable String serviceIndustryName) {
        List<IndustryCorrelation> correlations = industryCorrelationService.getTop5CorrelationsByServiceIndustryName(serviceIndustryName);

        Map<String, Object> response = new HashMap<>();
        response.put("ranking", ranking);
        response.put("serviceIndustryName", serviceIndustryName);
        response.put("correlations", correlations);

        return ResponseEntity.ok(response);
    }
}
