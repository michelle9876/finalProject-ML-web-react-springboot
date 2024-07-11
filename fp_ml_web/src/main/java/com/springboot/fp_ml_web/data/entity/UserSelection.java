package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserSelection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userSelection_id;
    private int userId;
    private String industry_category;
    private String industry_name;
    private String district_name;
    private int rent_fee_select ;
    private int rent_area;


}
