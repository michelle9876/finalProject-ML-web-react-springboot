package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.entity.IndustryCorrelation;
import com.springboot.fp_ml_web.data.entity.Ranking;
import com.springboot.fp_ml_web.data.repository.IndustryCorrelationRepository;
import com.springboot.fp_ml_web.data.repository.RankingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RankingService {
    @Autowired
    private RankingRepository rankingRepository;

    @Autowired
    private IndustryCorrelationRepository industryCorrelationRepository;

    public List<Ranking> getTop5Rankings(String industry, String district) {
        return rankingRepository.findTop5ByServiceIndustryNameAndDistrictNameOrderByPredictedSalesAmountMonthDesc(industry, district);
    }

    public List<IndustryCorrelation> getTop5Factors(int rankingId) {
        Optional<Ranking> rankingOptional = rankingRepository.findById(rankingId);
        if (rankingOptional.isPresent()) {
            Ranking ranking = rankingOptional.get();
            return industryCorrelationRepository.findTop5ByServiceIndustryNameOrderByRank(ranking.getServiceIndustryName());
        } else {
            return List.of();  // Return an empty list if the ranking is not found
        }
    }
}
