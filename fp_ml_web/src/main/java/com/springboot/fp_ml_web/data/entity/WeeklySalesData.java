package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class WeeklySalesData {
    @Id
    private Long id;
    private String serviceIndustryCode;
    private String serviceIndustryName;
    private Long mondaySalesAmount;
    private Long tuesdaySalesAmount;
    private Long wednesdaySalesAmount;
    private Long thursdaySalesAmount;
    private Long fridaySalesAmount;
    private Long saturdaySalesAmount;
    private Long sundaySalesAmount;
    private String businessDistrictCode;
    private String businessDistrictName;
}
