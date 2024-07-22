package com.springboot.fp_ml_web.data.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.DoubleSummaryStatistics;
import java.util.List;

@Data
public class UserSelectionDto {
    private int user_id; // 변수명에 언더스코어 사용
    private List<String> service_industry_name = new ArrayList<>(); // 기본값으로 빈 리스트 초기화
    private List<String> business_district_name = new ArrayList<>(); // 기본값으로 빈 리스트 초기화
    private RentFeeSelect rent_fee_select = new RentFeeSelect(); // 기본값으로 초기화
    private RentArea rent_area = new RentArea(); // 기본값으로 초기화

    @Data
    public static class RentFeeSelect {
      private int min = 0; // Default value
      private int max = 0;

        // Getters and Setters

    }

    @Data
    public static class RentArea {
        private int min = 0; // Default value
        private int max = 0;

        // Getters and Setters

    }

    @Data
    public static class UserSelectionDetailDto {
        private List<String> service_industry_name;
        private List<String> business_district_name;
    }
}
