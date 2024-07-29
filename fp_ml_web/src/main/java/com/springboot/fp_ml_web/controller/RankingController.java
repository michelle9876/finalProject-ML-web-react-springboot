package com.springboot.fp_ml_web.controller;

import com.springboot.fp_ml_web.data.entity.IndustryCorrelation;
import com.springboot.fp_ml_web.data.entity.Ranking;
import com.springboot.fp_ml_web.service.RankingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RankingController {
    @Autowired
    private RankingService rankingService;

    @GetMapping("/top5")
    public List<Ranking> getTop5Rankings(@RequestParam String industry, @RequestParam String district) {
        return rankingService.getTop5Rankings(industry, district);
    }

    @GetMapping("/{id}/factors")
    public List<IndustryCorrelation> getTop5Factors(@PathVariable int id) {
        return rankingService.getTop5Factors(id);
    }

}
