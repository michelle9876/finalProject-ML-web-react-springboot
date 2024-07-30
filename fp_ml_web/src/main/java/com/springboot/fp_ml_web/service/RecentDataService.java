package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.entity.RecentData;
import com.springboot.fp_ml_web.data.repository.RecentDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RecentDataService {
    @Autowired
    private RecentDataRepository recentDataRepository;

    public Map<String, Object> getFactorsByDistrictAndFactors(String businessDistrictName, List<String> factors){
        List<RecentData> recentDataList = recentDataRepository.findByBusinessDistrictName(businessDistrictName);
        Map<String, Object> response = new HashMap<>();

        for (String factor : factors){
            for (RecentData data : recentDataList){
                switch (factor){
                    case "월_평균_소득_금액":
                        response.put(factor, data.getMonthlyAverageIncomeAmount());
                        break;
                    case "총_유동인구_수":
                        response.put(factor, data.getTotalFloatingPopulation());
                        break;
                    case "총_직장_인구_수":
                        response.put(factor, data.getTotalWorkingPopulation());
                        break;
                    case "아파트_평균_시가":
                        response.put(factor, data.getApartmentAveragePrice());
                        break;
                    case "총_가구_수":
                        response.put(factor, data.getTotalHouseholds());
                        break;
                    case "지출_총금액":
                        response.put(factor, data.getTotalExpenditureAmount());
                        break;
                    case "점포_수":
                        response.put(factor, data.getTotalStores());
                        break;
                    case "운영_영업_개월_평균":
                        response.put(factor, data.getAverageOperatingMonths());
                        break;
                    case "집객시설_수":
                        response.put(factor, data.getTotalAttractionFacilities());
                        break;
                    case "폐업_영업_개월_평균":
                        response.put(factor, data.getAverageClosingMonths());
                        break;
                    case "개업_율":
                        response.put(factor, data.getOpeningRate());
                        break;
                    case "폐업_률":
                        response.put(factor, data.getClosingRate());
                        break;
                    case "약국_수":
                        response.put(factor, data.getPharmacies());
                        break;
                    case "서울_운영_영업_개월_평균":
                        response.put(factor, data.getSeoulAverageOperatingMonths());
                        break;
                    case "아파트_평균_면적":
                        response.put(factor, data.getApartmentAverageArea());
                        break;
                    default:
                        break;


                }
            }
        }

        return response;
    }

}
