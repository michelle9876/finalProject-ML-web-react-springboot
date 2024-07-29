package com.springboot.fp_ml_web.data.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import jakarta.persistence.*;

@Entity
@Table(name = "result_prediction")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResultPrediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "business_district_code", nullable = false)
    private String businessDistrictCode;

    @Column(name = "business_district", nullable = false)
    private String businessDistrict;

    @Column(name = "service_type_code", nullable = false)
    private String serviceTypeCode;

    @Column(name = "service_type", nullable = false)
    private String serviceType;

    @Column(name = "predicted_sales", nullable = false)
    private Double predictedSales;

    @Column(name = "rent", nullable = false)
    private Double rent;
}