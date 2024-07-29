package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.entity.UserSelectionDetail;
import com.springboot.fp_ml_web.service.UserSelectionDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserSelectionDetailController {
    @Autowired
    private UserSelectionDetailService userSelectionDetailService;

//    @PostMapping("/user-selection-details")
//    public ResponseEntity<UserSelectionDetail> createUserSelectionDetail(@RequestBody UserSelectionDetail userSelectionDetail) {
//        return ResponseEntity.ok(userSelectionDetailService.saveUserSelectionDetail(userSelectionDetail));
//    }

    @GetMapping("/user-selection-details/{id}")
    public ResponseEntity<UserSelectionDetail> getUserSelectionDetail(@PathVariable("id") int id) {
        UserSelectionDetail userSelectionDetail = userSelectionDetailService.getUserSelectionDetailById(id);
        if (userSelectionDetail != null) {
            return ResponseEntity.ok(userSelectionDetail);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user-selection-details")
    public ResponseEntity<List<UserSelectionDetail>> getAllUserSelectionDetails() {
        return ResponseEntity.ok(userSelectionDetailService.getAllUserSelectionDetails());
    }

    @DeleteMapping("/user-selection-details/{id}")
    public ResponseEntity<Void> deleteUserSelectionDetail(@PathVariable("id") int id) {
        userSelectionDetailService.deleteUserSelectionDetail(id);
        return ResponseEntity.noContent().build();
    }
}
