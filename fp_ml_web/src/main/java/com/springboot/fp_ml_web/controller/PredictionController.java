package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.dto.FilterSelectionDto;
import com.springboot.fp_ml_web.data.dto.PredictionResponseDto;
import com.springboot.fp_ml_web.service.PredictionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/predictions")
public class PredictionController {

    @Autowired
    private PredictionService predictionService;

    @PostMapping
    public ResponseEntity<List<PredictionResponseDto>> getPredictions(@RequestBody FilterSelectionDto filterDto) {
        List<PredictionResponseDto> predictions = predictionService.getPredictionsDto(filterDto);
        return ResponseEntity.ok(predictions);
    }
}