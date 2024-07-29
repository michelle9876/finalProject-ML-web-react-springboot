package com.springboot.fp_ml_web.data.entity;


import jakarta.persistence.*;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "filter_selection")


public class FilterSelection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(columnDefinition = "JSON")
    private String serviceIndustries;

    @Column(columnDefinition = "JSON")
    private String businessDistricts;

    @Column(name = "rent_fee_min")
    private Double rentFeeMin;

    @Column(name = "rent_fee_max")
    private Double rentFeeMax;

    @Column(name = "rent_area_min")
    private Double rentAreaMin;

    @Column(name = "rent_area_max")
    private Double rentAreaMax;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

}
