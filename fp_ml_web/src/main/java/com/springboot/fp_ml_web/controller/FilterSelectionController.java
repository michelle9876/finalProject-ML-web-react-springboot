package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.dto.FilterSelectionDto;
import com.springboot.fp_ml_web.service.FilterSelectionService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;

@RestController
public class FilterSelectionController {
    private static final Logger logger = LoggerFactory.getLogger(FilterSelectionController.class);

    @Autowired
    private FilterSelectionService filterSelectionService;

    @PostMapping("api/filters")
    public ResponseEntity<String> createFilter(@RequestBody FilterSelectionDto filterSelectionDto) {
        logger.info("Received FilterDTO: {}", filterSelectionDto);
        try {
            filterSelectionService.saveFilter(filterSelectionDto);
            return ResponseEntity.ok("Filter saved successfully");
        } catch (Exception e) {
            logger.error("Error saving filter", e);
            return ResponseEntity.badRequest().body("Error saving filter: " + e.getMessage());
        }
    }
}
