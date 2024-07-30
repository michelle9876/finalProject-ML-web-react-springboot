package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "industry_correlation")
@Data
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
