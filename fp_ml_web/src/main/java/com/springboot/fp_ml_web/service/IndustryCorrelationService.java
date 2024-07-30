package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.entity.IndustryCorrelation;
import com.springboot.fp_ml_web.data.repository.IndustryCorrelationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndustryCorrelationService {
    @Autowired
    private IndustryCorrelationRepository industryCorrelationRepository;
//
//    public List<IndustryCorrelation> getTop5Factors(String serviceIndustryName) {
//        return industryCorrelationRepository.findTop5ByServiceIndustryNameOrderByRankAsc(serviceIndustryName);
//    }

//    public List<IndustryCorrelation> getTop5CorrelationsByRank(int rank) {
//        return industryCorrelationRepository.findTop5ByRankLessThanEqualOrderByRankAsc(rank);
//    }


    public List<IndustryCorrelation> getTop5CorrelationsByServiceIndustryName(String serviceIndustryName) {
        return industryCorrelationRepository.findTop5ByServiceIndustryNameOrderByRankAsc(serviceIndustryName);
    }
}
