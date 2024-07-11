package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CheckingThought {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int checkingThought_id;
    private int userId;
    private String industry_name;
    private String reasons_columns ;
    private String up_and_down;
}
