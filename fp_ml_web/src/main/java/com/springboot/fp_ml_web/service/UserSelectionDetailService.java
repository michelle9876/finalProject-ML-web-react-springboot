package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.entity.UserSelectionDetail;
import com.springboot.fp_ml_web.data.repository.UserSelectionDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserSelectionDetailService {
    @Autowired
    private UserSelectionDetailRepository userSelectionDetailRepository;

    public UserSelectionDetail saveUserSelectionDetail(UserSelectionDetail userSelectionDetail) {
        return userSelectionDetailRepository.save(userSelectionDetail);
    }

    public UserSelectionDetail getUserSelectionDetailById(int id) {
        return userSelectionDetailRepository.findById(id).orElse(null);
    }

    public List<UserSelectionDetail> getAllUserSelectionDetails() {
        return userSelectionDetailRepository.findAll();
    }

    public void deleteUserSelectionDetail(int id) {
        userSelectionDetailRepository.deleteById(id);
    }
}
