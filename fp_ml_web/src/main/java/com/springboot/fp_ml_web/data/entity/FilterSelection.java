package com.springboot.fp_ml_web.data.entity;


import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
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
    private Integer rentFeeMin;

    @Column(name = "rent_fee_max")
    private Integer rentFeeMax;

    @Column(name = "rent_area_min")
    private Float rentAreaMin;

    @Column(name = "rent_area_max")
    private Float rentAreaMax;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

}
