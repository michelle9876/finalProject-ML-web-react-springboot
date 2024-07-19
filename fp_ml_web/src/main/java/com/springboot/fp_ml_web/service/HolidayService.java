package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.dto.HolidayRecommendationResponse;

public interface HolidayService {
    HolidayRecommendationResponse recommendHoliday(String serviceIndustryName, String businessDistrictName, int userId);
}
