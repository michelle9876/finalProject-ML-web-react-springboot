package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.entity.IndustryCorrelationRanking;
import com.springboot.fp_ml_web.data.repository.IndustryCorrelationRankingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndustryCorrelationRankingService {

    @Autowired
    private IndustryCorrelationRankingRepository repository;

    public List<String> getDistinctServiceIndustryNames() {
        return repository.findDistinctByServiceIndustryName()
                .stream()
                .map(IndustryCorrelationRanking::getServiceIndustryName)
                .distinct()
                .toList();
    }

    public List<String> getDistinctFactors() {
        return repository.findDistinctByFactor()
                .stream()
                .map(IndustryCorrelationRanking::getFactor)
                .distinct()
                .toList();
    }

    public List<IndustryCorrelationRanking> getPositiveCorrelationCoefficients(String value) {
        return repository.findByCorrelationCoefficientGreaterThanEqual(value);
    }

    public List<IndustryCorrelationRanking> getNegativeCorrelationCoefficients(String value) {
        return repository.findByCorrelationCoefficientLessThan(value);
    }
}
