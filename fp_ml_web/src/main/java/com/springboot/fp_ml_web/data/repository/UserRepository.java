package com.springboot.fp_ml_web.data.repository;

import com.springboot.fp_ml_web.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByNickName(String nickName);
}