package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.IndustryWeeklySales;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IndustryWeeklySalesRepository extends JpaRepository<IndustryWeeklySales, String> {
    IndustryWeeklySales findByServiceIndustryName(String serviceIndustryName);
}
