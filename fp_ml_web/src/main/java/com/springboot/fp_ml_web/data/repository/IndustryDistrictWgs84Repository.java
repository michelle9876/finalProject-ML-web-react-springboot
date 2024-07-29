package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.IndustryDistrictWgs84;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IndustryDistrictWgs84Repository extends JpaRepository<IndustryDistrictWgs84, Long> {
    Optional<IndustryDistrictWgs84> findByBusinessDistrictNameAndServiceIndustryName(String businessDistrictName, String serviceIndustryName);
}
