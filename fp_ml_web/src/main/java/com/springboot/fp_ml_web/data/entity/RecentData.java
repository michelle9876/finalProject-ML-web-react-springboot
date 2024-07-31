package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.math.BigInteger;

@Data
@Entity
public class RecentData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String yearQuarterCode;
    private String serviceIndustryName;
    private String businessDistrictName;
    private BigInteger monthlyAverageIncomeAmount;
    private BigInteger totalFloatingPopulation;
    private BigInteger totalWorkingPopulation;
    private BigInteger apartmentAveragePrice;
    private BigInteger totalHouseholds;
    private BigInteger totalExpenditureAmount;
    private Integer totalStores;
    private Integer averageOperatingMonths;
    private Integer totalAttractionFacilities;
    private Integer averageClosingMonths;
    private Double openingRate;
    private Double closingRate;
    private Integer pharmacies;
    private Integer seoulAverageOperatingMonths;
    private Integer apartmentAverageArea;
    private BigInteger monthlySalesPerStore;
}
