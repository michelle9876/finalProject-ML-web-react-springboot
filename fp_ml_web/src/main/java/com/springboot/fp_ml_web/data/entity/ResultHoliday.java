package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ElementCollection;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ResultHoliday {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int resultHolidayId;
    private int selectionForHolidayId;
    private String holidayGraph;

    @ElementCollection
    private List<Long> industry;

    @ElementCollection
    private List<Long> allRegions;

    @ElementCollection
    private List<Long> allIndustries;
}
