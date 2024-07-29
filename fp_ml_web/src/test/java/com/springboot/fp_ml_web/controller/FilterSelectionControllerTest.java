package com.springboot.fp_ml_web.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.springboot.fp_ml_web.data.dto.FilterSelectionDto;
import com.springboot.fp_ml_web.data.entity.FilterSelection;
import com.springboot.fp_ml_web.service.FilterSelectionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.server.ResponseStatusException;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


class FilterSelectionControllerTest {

    private MockMvc mockMvc;
    private final ObjectMapper objectMapper = new ObjectMapper();

    private FilterSelectionService filterSelectionService;

    @BeforeEach
    void setUp() {
        filterSelectionService = mock(FilterSelectionService.class);
        mockMvc = MockMvcBuilders.standaloneSetup(new FilterSelectionController(filterSelectionService)).build();
    }

    @Test
    void createFilter() throws Exception {
        FilterSelection filterSelection = FilterSelection.builder()
                .userId(123)
                .build();
        given(filterSelectionService.saveFilter(any(FilterSelectionDto.class))).willReturn(filterSelection);

        mockMvc.perform(post("/api/filter-selection")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(new FilterSelectionDto())))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.userId", equalTo(123)))
        ;
    }

    @Test
    void getFilterById() throws Exception {
        given(filterSelectionService.getFilterById(any(Long.class))).willReturn(new FilterSelection());

        FilterSelectionDto filterSelectionDto = FilterSelectionDto.builder()
                .userId(123)
                .build();
        given(filterSelectionService.convertToDto(any(FilterSelection.class))).willReturn(filterSelectionDto);

        mockMvc.perform(get("/api/filter-selection/1"))
                .andExpect(jsonPath("userId",equalTo(123)))
        ;
    }

    @Test
    void getFilterById_isNotFound_whenGetFilterById_throw_exception() throws Exception {
        given(filterSelectionService.getFilterById(any(Long.class))).willThrow(new ResponseStatusException(HttpStatus.NOT_FOUND));

        mockMvc.perform(get("/api/filter-selection/1"))
                .andExpect(status().isNotFound())
        ;
    }

    @Test
    void getFiltersByUserId() {
    }
}