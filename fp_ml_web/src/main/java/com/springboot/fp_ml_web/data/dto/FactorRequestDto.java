package com.springboot.fp_ml_web.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FactorRequestDto {
    private String businessDistrictName;
    private String serviceIndustryName;
    private List<String> factors;
}
