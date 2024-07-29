package com.springboot.fp_ml_web.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.springboot.fp_ml_web.data.dto.FilterSelectionDto;
import com.springboot.fp_ml_web.data.entity.FilterSelection;
import com.springboot.fp_ml_web.data.repository.FilterSelectionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FilterSelectionService {

    @Autowired
    private FilterSelectionRepository filterSelectionRepository;

    @Autowired
    private ObjectMapper objectMapper;

    private static final Logger logger = LoggerFactory.getLogger(FilterSelectionService.class);

    public FilterSelection getFilterById(Long id) {
        return filterSelectionRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public List<FilterSelection> getFiltersByUserId(Integer userId) {
        List<FilterSelection> filters = filterSelectionRepository.findByUserId(userId);
        if (filters.isEmpty()) {
            throw new RuntimeException("No filters found for userId: " + userId);
        }
        return filters;
    }

    public FilterSelection saveFilter(FilterSelectionDto filterSelectionDto) throws Exception {
        logger.info("Saving filter: {}", filterSelectionDto);

        FilterSelection filter = convertToEntity(filterSelectionDto);
        FilterSelection savedFilter = filterSelectionRepository.save(filter);
        logger.info("Saved filter: {}", savedFilter);
        return savedFilter;
    }

    private FilterSelection convertToEntity(FilterSelectionDto dto) throws Exception {
        FilterSelection filter = new FilterSelection();
        filter.setUserId(dto.getUserId());
        filter.setServiceIndustries(objectMapper.writeValueAsString(dto.getServiceIndustryName()));
        filter.setBusinessDistricts(objectMapper.writeValueAsString(dto.getBusinessDistrictName()));
        filter.setRentFeeMin(dto.getRentFeeSelect().getMin());
        filter.setRentFeeMax(dto.getRentFeeSelect().getMax());
        filter.setRentAreaMin(dto.getRentArea().getMin());
        filter.setRentAreaMax(dto.getRentArea().getMax());
        filter.setCreatedAt(LocalDateTime.now());
        return filter;
    }

    public FilterSelectionDto convertToDto(FilterSelection entity) throws Exception {
        FilterSelectionDto dto = new FilterSelectionDto();
        dto.setUserId(entity.getUserId());
        dto.setServiceIndustryName(objectMapper.readValue(entity.getServiceIndustries(), List.class));
        dto.setBusinessDistrictName(objectMapper.readValue(entity.getBusinessDistricts(), List.class));

        FilterSelectionDto.RentFee rentFee = new FilterSelectionDto.RentFee();
        rentFee.setMin(entity.getRentFeeMin());
        rentFee.setMax(entity.getRentFeeMax());
        dto.setRentFeeSelect(rentFee);

        FilterSelectionDto.RentArea rentArea = new FilterSelectionDto.RentArea();
        rentArea.setMin(entity.getRentAreaMin());
        rentArea.setMax(entity.getRentAreaMax());
        dto.setRentArea(rentArea);

        return dto;
    }

    public List<FilterSelectionDto> convertToDtoList(List<FilterSelection> entities) throws Exception {
        return entities.stream().map(entity -> {
            try {
                return convertToDto(entity);
            } catch (Exception e) {
                logger.error("Error converting entity to DTO", e);
                return null;
            }
        }).filter(dto -> dto != null).toList();
    }
}