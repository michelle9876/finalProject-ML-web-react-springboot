package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.dto.FilterSelectionDto;
import com.springboot.fp_ml_web.data.entity.FilterSelection;
import com.springboot.fp_ml_web.service.FilterSelectionService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;

import java.util.List;

@RestController
@RequestMapping("/api/filter-selection")
public class FilterSelectionController {
    private static final Logger logger = LoggerFactory.getLogger(FilterSelectionController.class);

    private FilterSelectionService filterSelectionService;

    public FilterSelectionController(FilterSelectionService filterSelectionService) {
        this.filterSelectionService = filterSelectionService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public FilterSelection createFilter(@RequestBody FilterSelectionDto filterSelectionDto) throws Exception {
        return filterSelectionService.saveFilter(filterSelectionDto);
    }

    @GetMapping("/{id}")
    public FilterSelectionDto getFilterById(@PathVariable Long id) throws Exception {
            FilterSelection filter = filterSelectionService.getFilterById(id);
            return filterSelectionService.convertToDto(filter);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getFiltersByUserId(@PathVariable Integer userId) {
        try {
            List<FilterSelection> filters = filterSelectionService.getFiltersByUserId(userId);
            List<FilterSelectionDto> filterDtos = filterSelectionService.convertToDtoList(filters);
            return ResponseEntity.ok(filterDtos);
        } catch (RuntimeException e) {
            logger.error("Error getting filters by user id", e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Filters not found: " + e.getMessage());
        } catch (Exception e) {
            logger.error("Error converting filters to DTOs", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing filters: " + e.getMessage());
        }
    }
}