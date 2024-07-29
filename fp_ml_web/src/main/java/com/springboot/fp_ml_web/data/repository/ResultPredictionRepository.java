package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.ResultPrediction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ResultPredictionRepository extends JpaRepository<ResultPrediction, Long> {

    @Query("SELECT rp FROM ResultPrediction rp " +
            "WHERE (:serviceTypes IS NULL OR rp.serviceType IN :serviceTypes) " +
            "AND (:businessDistricts IS NULL OR rp.businessDistrict IN :businessDistricts) " +
            "AND (:minRent IS NULL OR rp.rent >= :minRent) " +
            "AND (:maxRent IS NULL OR rp.rent <= :maxRent)")
    Page<ResultPrediction> findPredictions(
            @Param("serviceTypes") List<String> serviceTypes,
            @Param("businessDistricts") List<String> businessDistricts,
            @Param("minRent") Double minRent,
            @Param("maxRent") Double maxRent,
            Pageable pageable
    );
}