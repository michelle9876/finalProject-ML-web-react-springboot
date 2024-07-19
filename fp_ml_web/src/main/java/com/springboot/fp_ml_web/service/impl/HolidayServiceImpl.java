package com.springboot.fp_ml_web.service.impl;

import com.springboot.fp_ml_web.data.entity.WeeklySalesData;
import com.springboot.fp_ml_web.data.entity.ResultHoliday;
import com.springboot.fp_ml_web.data.entity.SelectionForHoliday;
import com.springboot.fp_ml_web.data.repository.WeeklySalesDataRepository;
import com.springboot.fp_ml_web.data.repository.ResultHolidayRepository;
import com.springboot.fp_ml_web.data.repository.SelectionForHolidayRepository;
import com.springboot.fp_ml_web.dto.HolidayRecommendationResponse;
import com.springboot.fp_ml_web.service.HolidayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HolidayServiceImpl implements HolidayService {

    @Autowired
    private WeeklySalesDataRepository weeklySalesDataRepository;

    @Autowired
    private SelectionForHolidayRepository selectionForHolidayRepository;

    @Autowired
    private ResultHolidayRepository resultHolidayRepository;

    @Override
    public HolidayRecommendationResponse recommendHoliday(String serviceIndustryName, String businessDistrictName, int userId) {
        // 업종과 상권을 모두 고려한 매출 데이터
        List<WeeklySalesData> industryAndRegionSalesDataList = weeklySalesDataRepository.findByServiceIndustryNameAndBusinessDistrictName(serviceIndustryName, businessDistrictName);
        long[] industrySalesAmounts = calculateAverageSales(industryAndRegionSalesDataList);

        // 상권만 고려한 매출 데이터
        List<WeeklySalesData> regionSalesDataList = weeklySalesDataRepository.findByBusinessDistrictName(businessDistrictName);
        long[] regionSalesAmounts = calculateAverageSales(regionSalesDataList);

        // 업종만 고려한 매출 데이터
        List<WeeklySalesData> allIndustrySalesDataList = weeklySalesDataRepository.findByServiceIndustryName(serviceIndustryName);
        long[] allIndustrySalesAmounts = calculateAverageSales(allIndustrySalesDataList);

        // 가장 매출이 적은 요일을 찾기 (업종과 상권 모두 고려)
        String recommendedDay = findLowestSalesDay(industrySalesAmounts);

        // SelectionForHoliday 엔티티 저장
        SelectionForHoliday selection = new SelectionForHoliday();
        selection.setUserId(userId);
        selection.setServiceIndustryName(serviceIndustryName);
        selection.setDistrictName(businessDistrictName);
        selectionForHolidayRepository.save(selection);

        // ResultHoliday 엔티티 저장
        ResultHoliday result = new ResultHoliday();
        result.setSelectionForHolidayId(selection.getSelectionForHolidayId());
        result.setHolidayGraph(recommendedDay);
        result.setIndustry(Arrays.asList(
                industrySalesAmounts[0], industrySalesAmounts[1], industrySalesAmounts[2],
                industrySalesAmounts[3], industrySalesAmounts[4], industrySalesAmounts[5],
                industrySalesAmounts[6]));
        result.setAllRegions(Arrays.asList(
                regionSalesAmounts[0], regionSalesAmounts[1], regionSalesAmounts[2],
                regionSalesAmounts[3], regionSalesAmounts[4], regionSalesAmounts[5],
                regionSalesAmounts[6]));
        result.setAllIndustries(Arrays.asList(
                allIndustrySalesAmounts[0], allIndustrySalesAmounts[1], allIndustrySalesAmounts[2],
                allIndustrySalesAmounts[3], allIndustrySalesAmounts[4], allIndustrySalesAmounts[5],
                allIndustrySalesAmounts[6]));
        resultHolidayRepository.save(result);

        // 응답 데이터 생성
        HolidayRecommendationResponse response = new HolidayRecommendationResponse();
        response.setRecommendedDay(recommendedDay);
        Map<String, long[]> chartData = new HashMap<>();
        chartData.put("industry", industrySalesAmounts);
        chartData.put("allRegions", regionSalesAmounts);
        chartData.put("allIndustries", allIndustrySalesAmounts);
        response.setChartData(chartData);

        return response;
    }

    private long[] calculateAverageSales(List<WeeklySalesData> salesDataList) {
        long[] salesAmounts = new long[7];
        if (salesDataList.isEmpty()) {
            return salesAmounts; // 모든 값을 0으로 반환
        }

        for (WeeklySalesData data : salesDataList) {
            salesAmounts[0] += data.getMondaySalesAmount();
            salesAmounts[1] += data.getTuesdaySalesAmount();
            salesAmounts[2] += data.getWednesdaySalesAmount();
            salesAmounts[3] += data.getThursdaySalesAmount();
            salesAmounts[4] += data.getFridaySalesAmount();
            salesAmounts[5] += data.getSaturdaySalesAmount();
            salesAmounts[6] += data.getSundaySalesAmount();
        }
        for (int i = 0; i < salesAmounts.length; i++) {
            salesAmounts[i] /= salesDataList.size();
        }
        return salesAmounts;
    }

    private String findLowestSalesDay(long[] salesAmounts) {
        long minSalesAmount = salesAmounts[0];
        int recommendedDayIndex = 0;
        for (int i = 1; i < salesAmounts.length; i++) {
            if (salesAmounts[i] < minSalesAmount) {
                minSalesAmount = salesAmounts[i];
                recommendedDayIndex = i;
            }
        }
        String[] dayNames = {"월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"};
        return dayNames[recommendedDayIndex];
    }
}
