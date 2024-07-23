package com.springboot.fp_ml_web.data.dto;

import com.springboot.fp_ml_web.data.entity.ResultPrediction;
import lombok.Data;

@Data
public class PredictionResponseDto {
    private int ranking;
    private String businessDistrictCode;
    private String businessDistrict;
    private String serviceTypeCode;
    private String serviceType;
    private Double predictedSales;  // BigDecimal에서 Double로 변경
    private Double rent;  // BigDecimal에서 Double로 변경

    // ResultPrediction 엔티티로부터 DTO를 생성하는 정적 메서드
    public static PredictionResponseDto fromEntity(ResultPrediction entity, int ranking) {
        PredictionResponseDto dto = new PredictionResponseDto();
        dto.setRanking(ranking);
        dto.setBusinessDistrictCode(entity.getBusinessDistrictCode());
        dto.setBusinessDistrict(entity.getBusinessDistrict());
        dto.setServiceTypeCode(entity.getServiceTypeCode());
        dto.setServiceType(entity.getServiceType());
        dto.setPredictedSales(entity.getPredictedSales());
        dto.setRent(entity.getRent());
        return dto;
    }
}