package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.WeeklySalesData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WeeklySalesDataRepository extends JpaRepository<WeeklySalesData, Long> {
    List<WeeklySalesData> findByServiceIndustryNameAndBusinessDistrictName(String serviceIndustryName, String businessDistrictName);
    List<WeeklySalesData> findByBusinessDistrictName(String businessDistrictName);
    List<WeeklySalesData> findByServiceIndustryName(String serviceIndustryName);
}
