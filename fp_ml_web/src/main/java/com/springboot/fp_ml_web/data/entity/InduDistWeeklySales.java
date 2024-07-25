package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@IdClass(InduDistWeeklySalesId.class)
public class InduDistWeeklySales {
    @Id
    private String serviceIndustryName;

    @Id
    private String businessDistrictName;

    private Long mondaySalesAmount;
    private Long tuesdaySalesAmount;
    private Long wednesdaySalesAmount;
    private Long thursdaySalesAmount;
    private Long fridaySalesAmount;
    private Long saturdaySalesAmount;
    private Long sundaySalesAmount;
}
