package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class SelectionForMap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int selectionForMap_id;
    private int userId;
    private String industry_category;
    private String industry_name;

}
