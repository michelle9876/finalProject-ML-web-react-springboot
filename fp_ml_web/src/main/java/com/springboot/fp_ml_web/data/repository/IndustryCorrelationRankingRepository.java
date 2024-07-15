package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.IndustryCorrelationRanking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IndustryCorrelationRankingRepository extends JpaRepository<IndustryCorrelationRanking, String> {
    List<IndustryCorrelationRanking> findDistinctByServiceIndustryName();
    List<IndustryCorrelationRanking> findDistinctByFactor();
    List<IndustryCorrelationRanking> findByCorrelationCoefficientGreaterThanEqual(String value);
    List<IndustryCorrelationRanking> findByCorrelationCoefficientLessThan(String value);
}
