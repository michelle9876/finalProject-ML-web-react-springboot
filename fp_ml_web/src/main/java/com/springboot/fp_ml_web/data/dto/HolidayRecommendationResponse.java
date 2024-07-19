package com.springboot.fp_ml_web.dto;

import java.util.Map;

public class HolidayRecommendationResponse {
    private String recommendedDay;
    private Map<String, long[]> chartData;

    // Getters and Setters
    public String getRecommendedDay() {
        return recommendedDay;
    }

    public void setRecommendedDay(String recommendedDay) {
        this.recommendedDay = recommendedDay;
    }

    public Map<String, long[]> getChartData() {
        return chartData;
    }

    public void setChartData(Map<String, long[]> chartData) {
        this.chartData = chartData;
    }
}
