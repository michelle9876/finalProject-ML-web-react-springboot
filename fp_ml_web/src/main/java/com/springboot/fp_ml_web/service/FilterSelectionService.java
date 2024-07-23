package com.springboot.fp_ml_web.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.springboot.fp_ml_web.data.dto.FilterSelectionDto;
import com.springboot.fp_ml_web.data.entity.FilterSelection;
import com.springboot.fp_ml_web.data.repository.FilterSelectionRepository;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service

public class FilterSelectionService {
    private static final Logger logger = LoggerFactory.getLogger(FilterSelectionService.class);

    @Autowired
    private FilterSelectionRepository filterSelectionRepository;

    @Autowired
    private ObjectMapper objectMapper;

    public void saveFilter(FilterSelectionDto filterSelectionDto) throws Exception {
        logger.info("Saving filter: {}", filterSelectionDto);

        FilterSelection filter = new FilterSelection();
        filter.setUserId(filterSelectionDto.getUserId());
        filter.setServiceIndustries(objectMapper.writeValueAsString(filterSelectionDto.getServiceIndustryName()));
        filter.setBusinessDistricts(objectMapper.writeValueAsString(filterSelectionDto.getBusinessDistrictName()));
        filter.setRentFeeMin(filterSelectionDto.getRentFeeSelect().getMin());
        filter.setRentFeeMax(filterSelectionDto.getRentFeeSelect().getMax());
        filter.setRentAreaMin(filterSelectionDto.getRentArea().getMin());
        filter.setRentAreaMax(filterSelectionDto.getRentArea().getMax());
        filter.setCreatedAt(LocalDateTime.now());

        FilterSelection savedFilter = filterSelectionRepository.save(filter);
        logger.info("Saved filter: {}", savedFilter);
    }
}