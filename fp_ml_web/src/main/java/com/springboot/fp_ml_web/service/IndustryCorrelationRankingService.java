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
        return repository.findDistinctServiceIndustryNames();
    }

    public List<String> getDistinctFactors() {
        return repository.findDistinctFactors();
    }

    public List<IndustryCorrelationRanking> getByServiceIndustryNameAndFactor(String serviceIndustryName, String factor) {
        return repository.findByServiceIndustryNameAndFactor(serviceIndustryName, factor);
    }
}
