package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.entity.User;
import com.springboot.fp_ml_web.data.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public List<User> getUser(){
        return this.userRepository.findAll();
    }

}
