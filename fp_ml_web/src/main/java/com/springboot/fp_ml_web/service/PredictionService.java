package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.dto.FilterSelectionDto;
import com.springboot.fp_ml_web.data.dto.PredictionResponseDto;
import com.springboot.fp_ml_web.data.entity.ResultPrediction;
import com.springboot.fp_ml_web.data.repository.ResultPredictionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PredictionService {

    @Autowired
    private ResultPredictionRepository repository;

    public List<PredictionResponseDto> getPredictionsDto(FilterSelectionDto filterDto) {
        List<ResultPrediction> predictions = getPredictions(filterDto);

        // Sort by predicted sales in descending order
        predictions.sort((p1, p2) -> p2.getPredictedSales().compareTo(p1.getPredictedSales()));

        // Convert to DTO and add ranking
        return predictions.stream()
                .map(prediction -> PredictionResponseDto.fromEntity(prediction, predictions.indexOf(prediction) + 1))
                .collect(Collectors.toList());
    }

    private List<ResultPrediction> getPredictions(FilterSelectionDto filterDto) {
        Double minRent = null;
        Double maxRent = null;

        if (filterDto.getRentFeeSelect().getMin() != null && filterDto.getRentArea().getMax() != null && !filterDto.getRentArea().getMax().isNaN()) {
            minRent = (filterDto.getRentFeeSelect().getMin() * 10.0) / filterDto.getRentArea().getMax();
        }
        if (filterDto.getRentFeeSelect().getMax() != null && filterDto.getRentArea().getMin() != null && !filterDto.getRentArea().getMin().isNaN()) {
            maxRent = (filterDto.getRentFeeSelect().getMax() * 10.0) / filterDto.getRentArea().getMin();
        }

        List<String> serviceTypes = filterDto.getServiceIndustryName().isEmpty() ? null : filterDto.getServiceIndustryName();
        List<String> businessDistricts = filterDto.getBusinessDistrictName().isEmpty() ? null : filterDto.getBusinessDistrictName();

        return repository.findPredictions(serviceTypes, businessDistricts, minRent, maxRent);
    }
}