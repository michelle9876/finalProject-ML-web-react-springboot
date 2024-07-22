package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class UserSelectionDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userSelectionDetail_id;
    private int userId;

    @ManyToOne
    @JoinColumn(name = "userSelectionId")
    private UserSelection userSelection;

    @CollectionTable
    private List<String> service_industry_name;

    @CollectionTable
    private List<String> business_district_name;
}
