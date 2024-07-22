package com.springboot.fp_ml_web.data.entity;

import com.springboot.fp_ml_web.data.dto.UserSelectionDto;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Entity
@Data
public class UserSelection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userSelectionId;
    private int userId;

//    @OneToMany(mappedBy = "userSelection", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @OneToMany(mappedBy = "userSelection", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<UserSelectionDetail> userSelectionDetail;

    private String service_industry_category;
    private String district_name;
    private String administrative_dong_name;
    private int rent_fee_select_min;
    private int rent_fee_select_max;
    private int rent_area_min;
    private int rent_area_max;
}

