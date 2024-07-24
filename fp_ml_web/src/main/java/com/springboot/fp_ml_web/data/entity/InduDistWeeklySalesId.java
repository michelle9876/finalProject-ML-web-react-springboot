package com.springboot.fp_ml_web.data.entity;

import java.io.Serializable;
import java.util.Objects;

public class InduDistWeeklySalesId implements Serializable {
    private String serviceIndustryName;
    private String businessDistrictName;

    // Default constructor
    public InduDistWeeklySalesId() {}

    // Parameterized constructor
    public InduDistWeeklySalesId(String serviceIndustryName, String businessDistrictName) {
        this.serviceIndustryName = serviceIndustryName;
        this.businessDistrictName = businessDistrictName;
    }

    // Getters and Setters
    public String getServiceIndustryName() {
        return serviceIndustryName;
    }

    public void setServiceIndustryName(String serviceIndustryName) {
        this.serviceIndustryName = serviceIndustryName;
    }

    public String getBusinessDistrictName() {
        return businessDistrictName;
    }

    public void setBusinessDistrictName(String businessDistrictName) {
        this.businessDistrictName = businessDistrictName;
    }

    // equals() and hashCode() methods
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InduDistWeeklySalesId that = (InduDistWeeklySalesId) o;
        return Objects.equals(serviceIndustryName, that.serviceIndustryName) &&
                Objects.equals(businessDistrictName, that.businessDistrictName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(serviceIndustryName, businessDistrictName);
    }
}
