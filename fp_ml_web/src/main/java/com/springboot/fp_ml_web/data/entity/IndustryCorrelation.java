package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class IndustryCorrelation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer industryCorrelationId;

    private String serviceIndustryName;
    private String factorEng;
    private String factorKor;
    private Double correlationCoefficient;
    private Integer rank;
}
