package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.RecentData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecentDataRepository extends JpaRepository<RecentData, Long> {
    List<RecentData> findByBusinessDistrictNameAndServiceIndustryName(String businessDistrictName, String serviceIndustryName);
}
