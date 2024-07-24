package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.InduDistWeeklySales;
import com.springboot.fp_ml_web.data.entity.InduDistWeeklySalesId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InduDistWeeklySalesRepository extends JpaRepository<InduDistWeeklySales, InduDistWeeklySalesId> {
    InduDistWeeklySales findByServiceIndustryNameAndBusinessDistrictName(String serviceIndustryName, String businessDistrictName);
}
