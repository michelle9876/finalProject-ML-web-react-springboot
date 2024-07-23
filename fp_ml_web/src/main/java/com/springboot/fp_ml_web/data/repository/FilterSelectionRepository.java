package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.FilterSelection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilterSelectionRepository extends JpaRepository<FilterSelection, Long> {
}