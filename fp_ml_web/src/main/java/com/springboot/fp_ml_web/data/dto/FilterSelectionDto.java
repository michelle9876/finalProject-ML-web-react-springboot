package com.springboot.fp_ml_web.data.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FilterSelectionDto {
    @JsonProperty("userId")
    private Integer userId;

    @JsonProperty("service_industry_name")
    private List<String> serviceIndustryName;

    @JsonProperty("business_district_name")
    private List<String> businessDistrictName;

    @JsonProperty("rent_fee_select")
    private RentFee rentFeeSelect;

    @JsonProperty("rent_area")
    private RentArea rentArea;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RentFee {
        private Double min;
        private Double max;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RentArea {
        private Double min;
        private Double max;
    }

}
