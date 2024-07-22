package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.UserSelectionDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserSelectionDetailRepository extends JpaRepository<UserSelectionDetail, Integer> {
}
