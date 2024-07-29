package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.entity.ResultPrediction;
import com.springboot.fp_ml_web.data.entity.IndustryDistrictWgs84;
import com.springboot.fp_ml_web.data.entity.SelectionForMap;
import com.springboot.fp_ml_web.data.repository.ResultPredictionRepository;
import com.springboot.fp_ml_web.data.repository.IndustryDistrictWgs84Repository;
import com.springboot.fp_ml_web.data.repository.SelectionForMapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class RankMapService {

    @Autowired
    private ResultPredictionRepository resultPredictionRepository;

    @Autowired
    private IndustryDistrictWgs84Repository industryDistrictWgs84Repository;

    @Autowired
    private SelectionForMapRepository selectionForMapRepository;

    public Map<String, Object> getTopCommercialAreas(List<String> selectedBusinessTypes, Long userId) {
        Map<String, Object> response = new HashMap<>();
        for (String businessType : selectedBusinessTypes) {
            // Fetch top 5 predictions for the given business type
            List<ResultPrediction> predictions = resultPredictionRepository.findTopPredictionsByServiceType(
                    List.of(businessType), PageRequest.of(0, 5)
            );

            // Map the predictions to response format
            List<Map<String, Object>> topAreas = predictions.stream().map(prediction -> {
                Map<String, Object> areaData = new HashMap<>();
                areaData.put("commercial_area_name", prediction.getBusinessDistrict());
                Optional<IndustryDistrictWgs84> locationData = industryDistrictWgs84Repository.findByBusinessDistrictNameAndServiceIndustryName(
                        prediction.getBusinessDistrict(), businessType);
                locationData.ifPresent(location -> {
                    areaData.put("latitude", location.getLatitude());
                    areaData.put("longitude", location.getLongitude());
                });
                areaData.put("rank", predictions.indexOf(prediction) + 1);
                return areaData;
            }).toList();
            response.put(businessType, topAreas);

            // Save the user's selection for tracking
            SelectionForMap selection = new SelectionForMap();
            selection.setUserId(userId);
            selection.setServiceIndustryName(businessType);
            selectionForMapRepository.save(selection);
        }
        return response;
    }
}
