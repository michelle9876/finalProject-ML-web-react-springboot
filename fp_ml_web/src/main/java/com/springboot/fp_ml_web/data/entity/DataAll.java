package com.springboot.fp_ml_web.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class DataAll {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "year_quarter_code")
    private String yearQuarterCode;

    @Column(name = "business_district_type_code")
    private String businessDistrictTypeCode;

    @Column(name = "business_district_type_name")
    private String businessDistrictTypeName;

    @Column(name = "business_district_code")
    private String businessDistrictCode;

    @Column(name = "business_district_name")
    private String businessDistrictName;

    @Column(name = "service_industry_code")
    private String serviceIndustryCode;

    @Column(name = "service_industry_name")
    private String serviceIndustryName;

    @Column(name = "monthly_sales_amount")
    private double monthlySalesAmount;

    @Column(name = "monthly_sales_count")
    private int monthlySalesCount;

    @Column(name = "weekday_sales_amount")
    private double weekdaySalesAmount;

    @Column(name = "weekend_sales_amount")
    private double weekendSalesAmount;

    @Column(name = "monday_sales_amount")
    private double mondaySalesAmount;

    @Column(name = "tuesday_sales_amount")
    private double tuesdaySalesAmount;

    @Column(name = "wednesday_sales_amount")
    private double wednesdaySalesAmount;

    @Column(name = "thursday_sales_amount")
    private double thursdaySalesAmount;

    @Column(name = "friday_sales_amount")
    private double fridaySalesAmount;

    @Column(name = "saturday_sales_amount")
    private double saturdaySalesAmount;

    @Column(name = "sunday_sales_amount")
    private double sundaySalesAmount;

    @Column(name = "time_00_06_sales_amount")
    private double time0006SalesAmount;

    @Column(name = "time_06_11_sales_amount")
    private double time0611SalesAmount;

    @Column(name = "time_11_14_sales_amount")
    private double time1114SalesAmount;

    @Column(name = "time_14_17_sales_amount")
    private double time1417SalesAmount;

    @Column(name = "time_17_21_sales_amount")
    private double time1721SalesAmount;

    @Column(name = "time_21_24_sales_amount")
    private double time2124SalesAmount;

    @Column(name = "male_sales_amount")
    private double maleSalesAmount;

    @Column(name = "female_sales_amount")
    private double femaleSalesAmount;

    @Column(name = "age_10s_sales_amount")
    private double age10sSalesAmount;

    @Column(name = "age_20s_sales_amount")
    private double age20sSalesAmount;

    @Column(name = "age_30s_sales_amount")
    private double age30sSalesAmount;

    @Column(name = "age_40s_sales_amount")
    private double age40sSalesAmount;

    @Column(name = "age_50s_sales_amount")
    private double age50sSalesAmount;

    @Column(name = "age_60_above_sales_amount")
    private double age60AboveSalesAmount;

    @Column(name = "weekday_sales_count")
    private int weekdaySalesCount;

    @Column(name = "weekend_sales_count")
    private int weekendSalesCount;

    @Column(name = "monday_sales_count")
    private int mondaySalesCount;

    @Column(name = "tuesday_sales_count")
    private int tuesdaySalesCount;

    @Column(name = "wednesday_sales_count")
    private int wednesdaySalesCount;

    @Column(name = "thursday_sales_count")
    private int thursdaySalesCount;

    @Column(name = "friday_sales_count")
    private int fridaySalesCount;

    @Column(name = "saturday_sales_count")
    private int saturdaySalesCount;

    @Column(name = "sunday_sales_count")
    private int sundaySalesCount;

    @Column(name = "time_00_06_sales_count")
    private int time0006SalesCount;

    @Column(name = "time_06_11_sales_count")
    private int time0611SalesCount;

    @Column(name = "time_11_14_sales_count")
    private int time1114SalesCount;

    @Column(name = "time_14_17_sales_count")
    private int time1417SalesCount;

    @Column(name = "time_17_21_sales_count")
    private int time1721SalesCount;

    @Column(name = "time_21_24_sales_count")
    private int time2124SalesCount;

    @Column(name = "male_sales_count")
    private int maleSalesCount;

    @Column(name = "female_sales_count")
    private int femaleSalesCount;

    @Column(name = "age_10s_sales_count")
    private int age10sSalesCount;

    @Column(name = "age_20s_sales_count")
    private int age20sSalesCount;

    @Column(name = "age_30s_sales_count")
    private int age30sSalesCount;

    @Column(name = "age_40s_sales_count")
    private int age40sSalesCount;

    @Column(name = "age_50s_sales_count")
    private int age50sSalesCount;

    @Column(name = "age_60_above_sales_count")
    private int age60AboveSalesCount;

    @Column(name = "monthly_average_income_amount")
    private double monthlyAverageIncomeAmount;

    @Column(name = "income_bracket_code")
    private String incomeBracketCode;

    @Column(name = "total_expenditure_amount")
    private double totalExpenditureAmount;

    @Column(name = "food_expenditure_amount")
    private double foodExpenditureAmount;

    @Column(name = "clothing_and_shoes_expenditure_amount")
    private double clothingAndShoesExpenditureAmount;

    @Column(name = "household_goods_expenditure_amount")
    private double householdGoodsExpenditureAmount;

    @Column(name = "medical_expenditure_amount")
    private double medicalExpenditureAmount;

    @Column(name = "transportation_expenditure_amount")
    private double transportationExpenditureAmount;

    @Column(name = "leisure_expenditure_amount")
    private double leisureExpenditureAmount;

    @Column(name = "cultural_expenditure_amount")
    private double culturalExpenditureAmount;

    @Column(name = "education_expenditure_amount")
    private double educationExpenditureAmount;

    @Column(name = "entertainment_expenditure_amount")
    private double entertainmentExpenditureAmount;

    @Column(name = "total_floating_population")
    private int totalFloatingPopulation;

    @Column(name = "male_floating_population")
    private int maleFloatingPopulation;

    @Column(name = "female_floating_population")
    private int femaleFloatingPopulation;

    @Column(name = "age_10s_floating_population")
    private int age10sFloatingPopulation;

    @Column(name = "age_20s_floating_population")
    private int age20sFloatingPopulation;

    @Column(name = "age_30s_floating_population")
    private int age30sFloatingPopulation;

    @Column(name = "age_40s_floating_population")
    private int age40sFloatingPopulation;

    @Column(name = "age_50s_floating_population")
    private int age50sFloatingPopulation;

    @Column(name = "age_60_above_floating_population")
    private int age60AboveFloatingPopulation;

    @Column(name = "time_00_06_floating_population")
    private int time0006FloatingPopulation;

    @Column(name = "time_06_11_floating_population")
    private int time0611FloatingPopulation;

    @Column(name = "time_11_14_floating_population")
    private int time1114FloatingPopulation;

    @Column(name = "time_14_17_floating_population")
    private int time1417FloatingPopulation;

    @Column(name = "time_17_21_floating_population")
    private int time1721FloatingPopulation;

    @Column(name = "time_21_24_floating_population")
    private int time2124FloatingPopulation;

    @Column(name = "monday_floating_population")
    private int mondayFloatingPopulation;

    @Column(name = "tuesday_floating_population")
    private int tuesdayFloatingPopulation;

    @Column(name = "wednesday_floating_population")
    private int wednesdayFloatingPopulation;

    @Column(name = "thursday_floating_population")
    private int thursdayFloatingPopulation;

    @Column(name = "friday_floating_population")
    private int fridayFloatingPopulation;

    @Column(name = "saturday_floating_population")
    private int saturdayFloatingPopulation;

    @Column(name = "sunday_floating_population")
    private int sundayFloatingPopulation;

    @Column(name = "total_resident_population")
    private int totalResidentPopulation;

    @Column(name = "male_resident_population")
    private int maleResidentPopulation;

    @Column(name = "female_resident_population")
    private int femaleResidentPopulation;

    @Column(name = "age_10s_resident_population")
    private int age10sResidentPopulation;

    @Column(name = "age_20s_resident_population")
    private int age20sResidentPopulation;

    @Column(name = "age_30s_resident_population")
    private int age30sResidentPopulation;

    @Column(name = "age_40s_resident_population")
    private int age40sResidentPopulation;

    @Column(name = "age_50s_resident_population")
    private int age50sResidentPopulation;

    @Column(name = "age_60_above_resident_population")
    private int age60AboveResidentPopulation;

    @Column(name = "male_age_10s_resident_population")
    private int maleAge10sResidentPopulation;

    @Column(name = "male_age_20s_resident_population")
    private int maleAge20sResidentPopulation;

    @Column(name = "male_age_30s_resident_population")
    private int maleAge30sResidentPopulation;

    @Column(name = "male_age_40s_resident_population")
    private int maleAge40sResidentPopulation;

    @Column(name = "male_age_50s_resident_population")
    private int maleAge50sResidentPopulation;

    @Column(name = "male_age_60_above_resident_population")
    private int maleAge60AboveResidentPopulation;

    @Column(name = "female_age_10s_resident_population")
    private int femaleAge10sResidentPopulation;

    @Column(name = "female_age_20s_resident_population")
    private int femaleAge20sResidentPopulation;

    @Column(name = "female_age_30s_resident_population")
    private int femaleAge30sResidentPopulation;

    @Column(name = "female_age_40s_resident_population")
    private int femaleAge40sResidentPopulation;

    @Column(name = "female_age_50s_resident_population")
    private int femaleAge50sResidentPopulation;

    @Column(name = "female_age_60_above_resident_population")
    private int femaleAge60AboveResidentPopulation;

    @Column(name = "total_households")
    private int totalHouseholds;

    @Column(name = "apartment_households")
    private int apartmentHouseholds;

    @Column(name = "non_apartment_households")
    private int nonApartmentHouseholds;

    @Column(name = "apartment_complexes")
    private int apartmentComplexes;

    @Column(name = "apartment_area_under_66_sqm")
    private double apartmentAreaUnder66Sqm;

    @Column(name = "apartment_area_66_sqm")
    private double apartmentArea66Sqm;

    @Column(name = "apartment_area_99_sqm")
    private double apartmentArea99Sqm;

    @Column(name = "apartment_area_132_sqm")
    private double apartmentArea132Sqm;

    @Column(name = "apartment_area_165_sqm")
    private double apartmentArea165Sqm;

    @Column(name = "apartment_price_under_100m")
    private double apartmentPriceUnder100m;

    @Column(name = "apartment_price_100m")
    private double apartmentPrice100m;

    @Column(name = "apartment_price_200m")
    private double apartmentPrice200m;

    @Column(name = "apartment_price_300m")
    private double apartmentPrice300m;

    @Column(name = "apartment_price_400m")
    private double apartmentPrice400m;

    @Column(name = "apartment_price_500m")
    private double apartmentPrice500m;

    @Column(name = "apartment_price_above_600m")
    private double apartmentPriceAbove600m;

    @Column(name = "apartment_average_area")
    private double apartmentAverageArea;

    @Column(name = "apartment_average_price")
    private double apartmentAveragePrice;

    @Column(name = "total_working_population")
    private int totalWorkingPopulation;

    @Column(name = "male_working_population")
    private int maleWorkingPopulation;

    @Column(name = "female_working_population")
    private int femaleWorkingPopulation;

    @Column(name = "age_10s_working_population")
    private int age10sWorkingPopulation;

    @Column(name = "age_20s_working_population")
    private int age20sWorkingPopulation;

    @Column(name = "age_30s_working_population")
    private int age30sWorkingPopulation;

    @Column(name = "age_40s_working_population")
    private int age40sWorkingPopulation;

    @Column(name = "age_50s_working_population")
    private int age50sWorkingPopulation;

    @Column(name = "age_60_above_working_population")
    private int age60AboveWorkingPopulation;

    @Column(name = "male_age_10s_working_population")
    private int maleAge10sWorkingPopulation;

    @Column(name = "male_age_20s_working_population")
    private int maleAge20sWorkingPopulation;

    @Column(name = "male_age_30s_working_population")
    private int maleAge30sWorkingPopulation;

    @Column(name = "male_age_40s_working_population")
    private int maleAge40sWorkingPopulation;

    @Column(name = "male_age_50s_working_population")
    private int maleAge50sWorkingPopulation;

    @Column(name = "male_age_60_above_working_population")
    private int maleAge60AboveWorkingPopulation;

    @Column(name = "female_age_10s_working_population")
    private int femaleAge10sWorkingPopulation;

    @Column(name = "female_age_20s_working_population")
    private int femaleAge20sWorkingPopulation;

    @Column(name = "female_age_30s_working_population")
    private int femaleAge30sWorkingPopulation;

    @Column(name = "female_age_40s_working_population")
    private int femaleAge40sWorkingPopulation;

    @Column(name = "female_age_50s_working_population")
    private int femaleAge50sWorkingPopulation;

    @Column(name = "female_age_60_above_working_population")
    private int femaleAge60AboveWorkingPopulation;

    @Column(name = "total_attraction_facilities")
    private int totalAttractionFacilities;

    @Column(name = "government_offices")
    private int governmentOffices;

    @Column(name = "banks")
    private int banks;

    @Column(name = "general_hospitals")
    private int generalHospitals;

    @Column(name = "hospitals")
    private int hospitals;

    @Column(name = "pharmacies")
    private int pharmacies;

    @Column(name = "kindergartens")
    private int kindergartens;

    @Column(name = "elementary_schools")
    private int elementarySchools;

    @Column(name = "middle_schools")
    private int middleSchools;

    @Column(name = "high_schools")
    private int highSchools;

    @Column(name = "universities")
    private int universities;

    @Column(name = "department_stores")
    private int departmentStores;

    @Column(name = "supermarkets")
    private int supermarkets;

    @Column(name = "theaters")
    private int theaters;

    @Column(name = "accommodation_facilities")
    private int accommodationFacilities;

    @Column(name = "airports")
    private int airports;

    @Column(name = "train_stations")
    private int trainStations;

    @Column(name = "bus_terminals")
    private int busTerminals;

    @Column(name = "subway_stations")
    private int subwayStations;

    @Column(name = "bus_stops")
    private int busStops;

    @Column(name = "total_stores")
    private int totalStores;

    @Column(name = "similar_industry_stores")
    private int similarIndustryStores;

    @Column(name = "opening_rate")
    private double openingRate;

    @Column(name = "number_of_openings")
    private int numberOfOpenings;

    @Column(name = "closing_rate")
    private double closingRate;

    @Column(name = "number_of_closures")
    private int numberOfClosures;

    @Column(name = "franchise_stores")
    private int franchiseStores;

    @Column(name = "x_coordinate")
    private double xCoordinate;

    @Column(name = "y_coordinate")
    private double yCoordinate;

    @Column(name = "district_code")
    private String districtCode;

    @Column(name = "district_name")
    private String districtName;

    @Column(name = "administrative_dong_code")
    private String administrativeDongCode;

    @Column(name = "administrative_dong_name")
    private String administrativeDongName;

    @Column(name = "area_size")
    private double areaSize;

    @Column(name = "business_district_change_index")
    private double businessDistrictChangeIndex;

    @Column(name = "business_district_change_index_name")
    private String businessDistrictChangeIndexName;

    @Column(name = "average_operating_months")
    private double averageOperatingMonths;

    @Column(name = "average_closing_months")
    private double averageClosingMonths;

    @Column(name = "seoul_average_operating_months")
    private double seoulAverageOperatingMonths;

    @Column(name = "seoul_average_closing_months")
    private double seoulAverageClosingMonths;

    @Column(name = "monthly_sales_per_store")
    private double monthlySalesPerStore;

    @Column(name = "monthly_sales_count_per_store")
    private int monthlySalesCountPerStore;

    @Column(name = "previous_quarter_code")
    private String previousQuarterCode;

    @Column(name = "previous_quarter_monthly_sales_per_store")
    private double previousQuarterMonthlySalesPerStore;

    // 필요한 경우 Getter와 Setter를 추가합니다.
}
