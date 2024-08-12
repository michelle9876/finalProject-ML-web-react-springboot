package com.springboot.fp_ml_web.service;

import com.springboot.fp_ml_web.data.dto.FactorRequestDto;
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
    public Map<String, Map<String, Object>> getFactorsByDistrictAndService(FactorRequestDto requestDto) {
        List<RecentData> dataList = recentDataRepository.findByBusinessDistrictNameAndServiceIndustryName(
                requestDto.getBusinessDistrictName(), requestDto.getServiceIndustryName());

        Map<String, Map<String, Object>> response = new HashMap<>();

        for (RecentData  data : dataList) {
            String yearQuarterCode = data.getYearQuarterCode();
            if (!response.containsKey(yearQuarterCode)) {
                response.put(yearQuarterCode, new HashMap<>());
            }
            Map<String, Object> factors = response.get(yearQuarterCode);


            for (String factor : requestDto.getFactors()){

                switch (factor){
                    case "월_평균_소득_금액":
                        factors.put(factor, data.getMonthlyAverageIncomeAmount());
                        break;
                    case "총_유동인구_수":
                        factors.put(factor, data.getTotalFloatingPopulation());
                        break;
                    case "총_직장_인구_수":
                        factors.put(factor, data.getTotalWorkingPopulation());
                        break;
                    case "아파트_평균_시가":
                        factors.put(factor, data.getApartmentAveragePrice());
                        break;
                    case "총_가구_수":
                        factors.put(factor, data.getTotalHouseholds());
                        break;
                    case "지출_총금액":
                        factors.put(factor, data.getTotalExpenditureAmount());
                        break;
                    case "점포_수":
                        factors.put(factor, data.getTotalStores());
                        break;
                    case "운영_영업_개월_평균":
                        factors.put(factor, data.getAverageOperatingMonths());
                        break;
                    case "집객시설_수":
                        factors.put(factor, data.getTotalAttractionFacilities());
                        break;
                    case "폐업_영업_개월_평균":
                        factors.put(factor, data.getAverageClosingMonths());
                        break;
                    case "개업_율":
                        factors.put(factor, data.getOpeningRate());
                        break;
                    case "폐업_률":
                        factors.put(factor, data.getClosingRate());
                        break;
                    case "약국_수":
                        factors.put(factor, data.getPharmacies());
                        break;
                    case "서울_운영_영업_개월_평균":
                        factors.put(factor, data.getSeoulAverageOperatingMonths());
                        break;
                    case "아파트_평균_면적":
                        factors.put(factor, data.getApartmentAverageArea());
                        break;
                    case "점포당_당월_매출_금액":
                        factors.put(factor, data.getMonthlySalesPerStore());
                        break;
                    default:
                        break;

                }
            }

        }
        return response;

    }

}
