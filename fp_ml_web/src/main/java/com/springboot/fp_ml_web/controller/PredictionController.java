package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.dto.FilterSelectionDto;
import com.springboot.fp_ml_web.data.dto.PredictionResponseDto;
import com.springboot.fp_ml_web.data.entity.IndustryCorrelation;
import com.springboot.fp_ml_web.service.IndustryCorrelationService;
import com.springboot.fp_ml_web.service.PredictionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/predictions")
@CrossOrigin(origins = "http://localhost:3000") // React 앱의 URL
public class PredictionController {

    @Autowired
    private PredictionService predictionService;

 //    코드 추가!!!
//    @Autowired
//    private IndustryCorrelationService industryCorrelationService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> getPredictions(
            @RequestBody FilterSelectionDto filterDto,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Page<PredictionResponseDto> predictions = predictionService.getPredictionsDto(filterDto, page, size);

        Map<String, Object> response = new HashMap<>();
        response.put("content", predictions.getContent());
        response.put("currentPage", predictions.getNumber());
        response.put("totalItems", predictions.getTotalElements());
        response.put("totalPages", predictions.getTotalPages());
        response.put("size", predictions.getSize());
        response.put("first", predictions.isFirst());
        response.put("last", predictions.isLast());
        response.put("empty", predictions.isEmpty());

        // 코드 추가!!! Add industry correlations for each ranking
//        Map<Integer, List<IndustryCorrelation>> correlationsMap = new HashMap<>();
//        List<PredictionResponseDto> predictionList = predictions.getContent();
//        for (PredictionResponseDto prediction : predictionList) {
//            String serviceIndustryName = prediction.getServiceType();
//            List<IndustryCorrelation> correlations = industryCorrelationService.getTop5CorrelationsByServiceIndustryName(serviceIndustryName);
//            correlationsMap.put(prediction.getRanking(), correlations);
//        }
//        response.put("correlations", correlationsMap);


        return ResponseEntity.ok(response);
    }

    //코드 추가!!

//    @GetMapping("/top5-factors")
//    public ResponseEntity<List<IndustryCorrelation>> getTop5Factors(@RequestParam String serviceIndustryName) {
//        List<IndustryCorrelation> top5Factors = industryCorrelationService.getTop5Factors(serviceIndustryName);
//        return ResponseEntity.ok(top5Factors);
//    }
}