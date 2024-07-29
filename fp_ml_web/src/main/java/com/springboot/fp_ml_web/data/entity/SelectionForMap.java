package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "selection_for_map")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SelectionForMap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long selectionForMap_id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "service_industry_name", nullable = false)
    private String serviceIndustryName;
}
