package com.springboot.fp_ml_web.data.entity;

import com.springboot.fp_ml_web.data.converter.JsonLongListConverter;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    @Convert(converter = JsonLongListConverter.class)
    private List<Long> industry;

    @Convert(converter = JsonLongListConverter.class)
    private List<Long> allRegions;

    @Convert(converter = JsonLongListConverter.class)
    private List<Long> allIndustries;
}
