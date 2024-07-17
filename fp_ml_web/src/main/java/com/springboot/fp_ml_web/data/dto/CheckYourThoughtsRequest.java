package com.springboot.fp_ml_web.dto;

public class CheckYourThoughtsRequest {
    private String industry;
    private String factor;
    private String condition;

    // Getters and setters
    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }

    public String getFactor() {
        return factor;
    }

    public void setFactor(String factor) {
        this.factor = factor;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }
}
