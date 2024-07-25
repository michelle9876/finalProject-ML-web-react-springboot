package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.DistrictWeeklySales;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DistrictWeeklySalesRepository extends JpaRepository<DistrictWeeklySales, String> {
    DistrictWeeklySales findByBusinessDistrictName(String businessDistrictName);
}
