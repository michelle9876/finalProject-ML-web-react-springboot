package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.IndustryCorrelation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IndustryCorrelationRepository extends JpaRepository<IndustryCorrelation, Integer> {
//    List<IndustryCorrelation> findTop5ByServiceIndustryNameOrderByRankAsc(String serviceIndustryName);
//    List<IndustryCorrelation> findTop5ByRankLessThanEqualOrderByRankAsc(int rank);
    List<IndustryCorrelation> findTop5ByServiceIndustryNameOrderByRankAsc(String serviceIndustryName);

}
