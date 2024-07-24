package com.springboot.fp_ml_web.service.impl;

import com.springboot.fp_ml_web.data.entity.DistrictWeeklySales;
import com.springboot.fp_ml_web.data.entity.InduDistWeeklySales;
import com.springboot.fp_ml_web.data.entity.IndustryWeeklySales;
import com.springboot.fp_ml_web.data.entity.ResultHoliday;
import com.springboot.fp_ml_web.data.entity.SelectionForHoliday;
import com.springboot.fp_ml_web.data.repository.DistrictWeeklySalesRepository;
import com.springboot.fp_ml_web.data.repository.InduDistWeeklySalesRepository;
import com.springboot.fp_ml_web.data.repository.IndustryWeeklySalesRepository;
import com.springboot.fp_ml_web.data.repository.ResultHolidayRepository;
import com.springboot.fp_ml_web.data.repository.SelectionForHolidayRepository;
import com.springboot.fp_ml_web.dto.HolidayRecommendationResponse;
import com.springboot.fp_ml_web.service.HolidayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Service
public class HolidayServiceImpl implements HolidayService {

    @Autowired
    private DistrictWeeklySalesRepository districtWeeklySalesRepository;

    @Autowired
    private InduDistWeeklySalesRepository induDistWeeklySalesRepository;

    @Autowired
    private IndustryWeeklySalesRepository industryWeeklySalesRepository;

    @Autowired
    private SelectionForHolidayRepository selectionForHolidayRepository;

    @Autowired
    private ResultHolidayRepository resultHolidayRepository;

    @Override
    public HolidayRecommendationResponse recommendHoliday(String serviceIndustryName, String businessDistrictName, int userId) {
        // 업종과 상권을 모두 고려한 매출 데이터
        InduDistWeeklySales industryAndRegionSalesData = induDistWeeklySalesRepository.findByServiceIndustryNameAndBusinessDistrictName(serviceIndustryName, businessDistrictName);
        long[] industrySalesAmounts = extractSalesAmounts(industryAndRegionSalesData);

        // 상권만 고려한 매출 데이터
        DistrictWeeklySales regionSalesData = districtWeeklySalesRepository.findByBusinessDistrictName(businessDistrictName);
        long[] regionSalesAmounts = extractSalesAmounts(regionSalesData);

        // 업종만 고려한 매출 데이터
        IndustryWeeklySales allIndustrySalesData = industryWeeklySalesRepository.findByServiceIndustryName(serviceIndustryName);
        long[] allIndustrySalesAmounts = extractSalesAmounts(allIndustrySalesData);

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

    private long[] extractSalesAmounts(Object salesData) {
        long[] salesAmounts = new long[7];
        if (salesData instanceof InduDistWeeklySales) {
            InduDistWeeklySales data = (InduDistWeeklySales) salesData;
            salesAmounts[0] = data.getMondaySalesAmount();
            salesAmounts[1] = data.getTuesdaySalesAmount();
            salesAmounts[2] = data.getWednesdaySalesAmount();
            salesAmounts[3] = data.getThursdaySalesAmount();
            salesAmounts[4] = data.getFridaySalesAmount();
            salesAmounts[5] = data.getSaturdaySalesAmount();
            salesAmounts[6] = data.getSundaySalesAmount();
        } else if (salesData instanceof DistrictWeeklySales) {
            DistrictWeeklySales data = (DistrictWeeklySales) salesData;
            salesAmounts[0] = data.getMondaySalesAmount();
            salesAmounts[1] = data.getTuesdaySalesAmount();
            salesAmounts[2] = data.getWednesdaySalesAmount();
            salesAmounts[3] = data.getThursdaySalesAmount();
            salesAmounts[4] = data.getFridaySalesAmount();
            salesAmounts[5] = data.getSaturdaySalesAmount();
            salesAmounts[6] = data.getSundaySalesAmount();
        } else if (salesData instanceof IndustryWeeklySales) {
            IndustryWeeklySales data = (IndustryWeeklySales) salesData;
            salesAmounts[0] = data.getMondaySalesAmount();
            salesAmounts[1] = data.getTuesdaySalesAmount();
            salesAmounts[2] = data.getWednesdaySalesAmount();
            salesAmounts[3] = data.getThursdaySalesAmount();
            salesAmounts[4] = data.getFridaySalesAmount();
            salesAmounts[5] = data.getSaturdaySalesAmount();
            salesAmounts[6] = data.getSundaySalesAmount();
        }
        return salesAmounts;
    }

    private String findLowestSalesDay(long[] salesAmounts) {
        int minIndex = 0;
        for (int i = 1; i < salesAmounts.length; i++) {
            if (salesAmounts[i] < salesAmounts[minIndex]) {
                minIndex = i;
            }
        }
        switch (minIndex) {
            case 0: return "월요일";
            case 1: return "화요일";
            case 2: return "수요일";
            case 3: return "목요일";
            case 4: return "금요일";
            case 5: return "토요일";
            case 6: return "일요일";
            default: return "월요일";
        }
    }
}
