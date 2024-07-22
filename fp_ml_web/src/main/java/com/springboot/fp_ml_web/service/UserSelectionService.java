package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.dto.UserSelectionDto;
import com.springboot.fp_ml_web.data.entity.District_category;
import com.springboot.fp_ml_web.data.entity.Service_industry;
import com.springboot.fp_ml_web.data.entity.UserSelection;
import com.springboot.fp_ml_web.data.repository.DistrictCategoryRepository;
import com.springboot.fp_ml_web.data.repository.ServiceIndustryRepository;
import com.springboot.fp_ml_web.data.repository.UserSelectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserSelectionService {
    @Autowired
    private DistrictCategoryRepository districtCategoryRepository;

    @Autowired
    private ServiceIndustryRepository serviceIndustryRepository;

    @Autowired
    private UserSelectionRepository userSelectionRepository;


    public List<District_category> getAllDistricts() {
        return districtCategoryRepository.findAll();
    }

    public List<Service_industry> getAllServiceIndustries() {
        return serviceIndustryRepository.findAll();
    }

//    public void saveUserSelection(UserSelectionDto userSelectionDto) {
//        UserSelection userSelection = new UserSelection();
//        userSelection.setUserSelection_id(userSelectionDto.getUser_id()); // DTO의 user_id를 엔티티의 user_selection_id에 매핑
//        userSelection.setUserId(userSelectionDto.getUser_id());
//        userSelection.setService_industry_name(userSelectionDto.getService_industry_name());
//        userSelection.setBusiness_district_name(userSelectionDto.getBusiness_district_name());
//        userSelection.setRent_fee_select(userSelectionDto.getRent_fee_select());
//        userSelection.setRent_area(userSelectionDto.getRent_area());
//
//        userSelectionRepository.save(userSelection);
//    }

    public UserSelection saveUserSelection(UserSelection userSelection) {
        return userSelectionRepository.save(userSelection);
    }

    public UserSelection getUserSelectionById(int id) {
        return userSelectionRepository.findById(id).orElse(null);
    }

    public List<UserSelection> getAllUserSelections() {
        return userSelectionRepository.findAll();
    }

    public void deleteUserSelection(int id) {
        userSelectionRepository.deleteById(id);
    }
}
