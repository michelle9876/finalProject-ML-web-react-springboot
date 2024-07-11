package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ResultThought {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int resultThought_id;
    private int checkingThought_id;
    private String text_result;
}
