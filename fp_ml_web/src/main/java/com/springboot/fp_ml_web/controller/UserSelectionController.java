package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.dto.UserSelectionDto;
import com.springboot.fp_ml_web.data.entity.District_category;
import com.springboot.fp_ml_web.data.entity.Service_industry;
import com.springboot.fp_ml_web.data.entity.UserSelection;
import com.springboot.fp_ml_web.data.entity.UserSelectionDetail;
import com.springboot.fp_ml_web.service.UserSelectionDetailService;
import com.springboot.fp_ml_web.service.UserSelectionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserSelectionController {
    @Autowired
    private UserSelectionService userSelectionService;

    @Autowired
    private UserSelectionDetailService userSelectionDetailService;

    @GetMapping("/districts")
    public List<District_category> getDistricts() {
        return userSelectionService.getAllDistricts();
    }

    @GetMapping("/service-industries")
    public List<Service_industry> getServiceIndustries() {
        return userSelectionService.getAllServiceIndustries();
    }

//    @PostMapping("/selections")
//    public void saveUserSelection(@RequestBody UserSelection userSelection) {
//        selectionService.saveUserSelection(userSelection);
//    }

//    @PostMapping("/user-selection")
//    public ResponseEntity<String> handleUserSelection(@Valid @RequestBody UserSelectionDto userSelectionDto, BindingResult result) {
//        if (result.hasErrors()) {
//            return ResponseEntity.badRequest().body("Invalid input");
//        }
//
//        // 데이터를 저장
//        selectionService.saveUserSelection(userSelectionDto);
//        // 적절한 응답을 반환
//        return ResponseEntity.ok("Success");
//    }

    @PostMapping("/user-selection")
    public ResponseEntity<UserSelection> createUserSelection(@RequestBody UserSelection userSelection) {
        return ResponseEntity.ok(userSelectionService.saveUserSelection(userSelection));

//        ResponseEntity<UserSelection> result = ResponseEntity.ok(userSelectionService.saveUserSelection(userSelection));
//        for (UserSelectionDetail detail : userSelection.getUserSelectionDetail()) {
//            userSelectionDetailService.saveUserSelectionDetail(detail);
//        }
//        return result;
    }

    @GetMapping("/user-selection/{id}")
    public ResponseEntity<UserSelection> getUserSelection(@PathVariable("id") int id) {
        UserSelection userSelection = userSelectionService.getUserSelectionById(id);
        if (userSelection != null) {
            return ResponseEntity.ok(userSelection);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user-selection")
    public ResponseEntity<List<UserSelection>> getAllUserSelections() {
        return ResponseEntity.ok(userSelectionService.getAllUserSelections());
    }

    @DeleteMapping("/user-selection/{id}")
    public ResponseEntity<Void> deleteUserSelection(@PathVariable("id") int id) {
        userSelectionService.deleteUserSelection(id);
        return ResponseEntity.noContent().build();
    }

}


