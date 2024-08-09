package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.dto.FilterSelectionDto;
import com.springboot.fp_ml_web.data.dto.PredictionResponseDto;
import com.springboot.fp_ml_web.data.entity.ResultPrediction;
import com.springboot.fp_ml_web.data.repository.ResultPredictionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PredictionService {

    @Autowired
    private ResultPredictionRepository repository;

    public Page<PredictionResponseDto> getPredictionsDto(FilterSelectionDto filterDto, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("predictedSales").descending());
        Page<ResultPrediction> predictions = getPredictions(filterDto, pageable);

        return predictions.map(prediction ->
                PredictionResponseDto.fromEntity(prediction,
                        predictions.getNumber() * size + predictions.getContent().indexOf(prediction) + 1)
        );
    }

    private Page<ResultPrediction> getPredictions(FilterSelectionDto filterDto, Pageable pageable) {
        Double minRent = null;
        Double maxRent = null;

        if (filterDto.getRentFeeSelect().getMin() != null && filterDto.getRentArea().getMax() != null && !filterDto.getRentArea().getMax().isNaN()) {
            minRent = (filterDto.getRentFeeSelect().getMin() / 1000.0) / filterDto.getRentArea().getMax();
        }
        if (filterDto.getRentFeeSelect().getMax() != null && filterDto.getRentArea().getMin() != null && !filterDto.getRentArea().getMin().isNaN()) {
            maxRent = (filterDto.getRentFeeSelect().getMax() / 1000.0) / filterDto.getRentArea().getMin();
        }

        List<String> serviceTypes = filterDto.getServiceIndustryName().isEmpty() ? null : filterDto.getServiceIndustryName();
        List<String> businessDistricts = filterDto.getBusinessDistrictName().isEmpty() ? null : filterDto.getBusinessDistrictName();

        return repository.findPredictions(serviceTypes, businessDistricts, minRent, maxRent, pageable);
    }
}