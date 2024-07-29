package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.Ranking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RankingRepository extends JpaRepository<Ranking, Integer> {
    List<Ranking> findTop5ByServiceIndustryNameAndDistrictNameOrderByPredictedSalesAmountMonthDesc(String serviceIndustryName, String districtName);
}
