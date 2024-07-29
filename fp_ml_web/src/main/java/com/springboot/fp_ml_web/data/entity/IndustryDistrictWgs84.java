package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "industry_district_wgs84")
public class IndustryDistrictWgs84 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String districtName;
    private String businessDistrictName;
    private String serviceIndustryName;
    private String serviceIndustryCategory;
    private double latitude;
    private double longitude;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDistrictName() {
        return districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName;
    }

    public String getBusinessDistrictName() {
        return businessDistrictName;
    }

    public void setBusinessDistrictName(String businessDistrictName) {
        this.businessDistrictName = businessDistrictName;
    }

    public String getServiceIndustryName() {
        return serviceIndustryName;
    }

    public void setServiceIndustryName(String serviceIndustryName) {
        this.serviceIndustryName = serviceIndustryName;
    }

    public String getServiceIndustryCategory() {
        return serviceIndustryCategory;
    }

    public void setServiceIndustryCategory(String serviceIndustryCategory) {
        this.serviceIndustryCategory = serviceIndustryCategory;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}
