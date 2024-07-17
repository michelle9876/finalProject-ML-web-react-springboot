package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.IndustryCorrelationRanking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IndustryCorrelationRankingRepository extends JpaRepository<IndustryCorrelationRanking, String> {

    @Query("SELECT DISTINCT i.serviceIndustryName FROM IndustryCorrelationRanking i")
    List<String> findDistinctServiceIndustryNames();

    @Query("SELECT DISTINCT i.factor FROM IndustryCorrelationRanking i")
    List<String> findDistinctFactors();

    List<IndustryCorrelationRanking> findByServiceIndustryNameAndFactor(String serviceIndustryName, String factor);
}
