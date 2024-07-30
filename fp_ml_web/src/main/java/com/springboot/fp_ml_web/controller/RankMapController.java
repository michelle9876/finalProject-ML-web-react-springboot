package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.dto.RankMapRequest;
import com.springboot.fp_ml_web.service.RankMapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class RankMapController {

    @Autowired
    private RankMapService rankMapService;

    @PostMapping("/rankmap")
    public Map<String, Object> getRankMap(@RequestBody RankMapRequest request) {
        return rankMapService.getTopCommercialAreas(request.getSelectedBusinessTypes(), request.getUserId());
    }
}
