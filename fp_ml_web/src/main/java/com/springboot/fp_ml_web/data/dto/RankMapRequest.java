package com.springboot.fp_ml_web.data.dto;

import java.util.List;

public class RankMapRequest {
    private List<String> selectedBusinessTypes;
    private Long userId;

    // Getter for selectedBusinessTypes
    public List<String> getSelectedBusinessTypes() {
        return selectedBusinessTypes;
    }

    // Setter for selectedBusinessTypes
    public void setSelectedBusinessTypes(List<String> selectedBusinessTypes) {
        this.selectedBusinessTypes = selectedBusinessTypes;
    }

    // Getter for userId
    public Long getUserId() {
        return userId;
    }

    // Setter for userId
    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
