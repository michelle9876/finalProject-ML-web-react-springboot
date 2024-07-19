package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.dto.HolidayRecommendationResponse;
import com.springboot.fp_ml_web.service.HolidayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/holiday-recommendation")
public class HolidayController {

    @Autowired
    private HolidayService holidayService;

    @PostMapping
    public HolidayRecommendationResponse recommendHoliday(@RequestParam String serviceIndustryName, @RequestParam String businessDistrictName, @RequestParam int userId) {
        return holidayService.recommendHoliday(serviceIndustryName, businessDistrictName, userId);
    }
}
