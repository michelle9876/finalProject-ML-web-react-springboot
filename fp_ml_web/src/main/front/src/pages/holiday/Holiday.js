import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Paper, Typography, Grid, TextField, Button, Box, Alert, AlertTitle, CircularProgress  } from '@mui/material';
import axios from 'axios';
import BusinessTypeFilter from '../../components/BusinessTypeFilter';
import RegionFilter from '../../components/RegionFilter';
import BarChart from '../../components/BarChart';
import './holiday.css';
import CombinedChart from '../../components/CombinedChart';
import { setFilter, selectFilter } from '../../redux/modules/filter';

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
};

const Header = ({ industry, region, recommendedDay }) => {
  // 요일에 따른 이미지 파일 이름을 매핑하는 객체
  const dayImageMap = {
    '월': 'monday.png',
    '화': 'tuesday.png',
    '수': 'wednesday.png',
    '목': 'thursday.png',
    '금': 'friday.png',
    '토': 'saturday.png',
    '일': 'sunday.png'
  };

  // 추천 요일의 첫 글자를 사용하여 해당하는 이미지 파일 이름을 가져옵니다
  const dayImageFile = dayImageMap[recommendedDay[0]] || 'monday.png';

  return (
    <div className="header w-full sm:w-[768px] lg:w-[768px]">
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-1">
          <div className="text-xs lg:text-xs text-[#47516b]">{industry}</div>
          <div className="flex items-center gap-1">
            <img className="w-3 h-3 lg:w-4 lg:h-4" src="basic/location304_12566.png" alt="location" />
            <div className="text-xs lg:text-xs text-[#79819a]">{region}</div>
          </div>
        </div>
        <div className="flex gap-1">
          <img 
            className="w-16 h-16 lg:w-16 lg:h-16" 
            src={`/img/week/${dayImageFile}`} 
            alt={`${recommendedDay} icon`} 
          />
          <div className="flex flex-col gap-1">
            <div className="text-sm lg:text-sm text-[#79819a] pt-2">{`${region} ${industry} 추천휴일`}</div>
            <div className="text-lg lg:text-lg font-bold text-[#2e2e48]">{recommendedDay}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChartSection = ({ title, chartComponent, analysisText }) => (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-5">
    <div className="flex sm:flex-col items-center">
      <div className="timeline-dot hidden sm:block">
        <img className="m-1.5" width="20" height="20" src="misc/dot_04_l304_12204.png" alt="dot" />
      </div>
      <div className="timeline-line hidden sm:block"></div>
    </div>
    <div className="w-full sm:w-[705px] flex flex-col items-start justify-start gap-[6px] pt-0 px-0 pb-[49px]">
      <div className="text-lg sm:text-xl font-medium text-[#2e2e48]">{title}</div>
      <div className="text-sm text-[#79819a]">{analysisText}</div>
      <div className="chart-container w-full" style={{ minHeight: '300px' }}>
        {chartComponent}
      </div>
    </div>
  </div>
);

const Holiday = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const industry = filter.selectedBusinessTypes[0]?.name || '';
  const region = filter.selectedRegions[0]?.name || '';
  const [showBusinessTypeFilter, setShowBusinessTypeFilter] = useState(false);
  const [showRegionFilter, setShowRegionFilter] = useState(false);
  const [userId, setUserId] = useState(null);
  const [businessTypeData, setBusinessTypeData] = useState(null);
  const [regionData, setRegionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedDay, setRecommendedDay] = useState('');
  const [chartData, setChartData] = useState({
    industry: [],
    allRegions: [],
    allIndustries: []
  });

  const days = ['월', '화', '수', '목', '금', '토', '일'];

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, []);

  // useEffect(() => {
  //   if (industry && region && userId) {
  //     fetchRecommendationData();
  //   }
  // }, [industry, region, userId]);

  const handleIndustrySelect = useCallback((selected) => {
    if (selected && selected.length > 0) {
      dispatch(setFilter({ selectedBusinessTypes: selected }));
      setShowBusinessTypeFilter(false);  // 드롭다운 닫기
    }
  }, [dispatch]);

  const handleRegionSelect = useCallback((selected) => {
    if (selected && selected.length > 0) {
      dispatch(setFilter({ selectedRegions: selected }));
      setShowRegionFilter(false);
    }
  }, [dispatch]);

  const handleBusinessTypeDataFetched = useCallback((data) => {
    setBusinessTypeData(data);
  }, []);

  const handleRegionDataFetched = useCallback((data) => {
    setRegionData(data);
  }, []);

  const fetchRecommendationData = async () => {
    setIsLoading(true);
    // 로딩이 시작되는 시점에 스크롤
    scrollToBottom();
    
    try {
      const response = await axios.post('/api/holiday-recommendation', null, {
        params: {
          serviceIndustryName: filter.selectedBusinessTypes[0]?.name,
          businessDistrictName: filter.selectedRegions[0]?.name,
          userId: userId
        }
      });
      const data = response.data;
      setRecommendedDay(data.recommendedDay);
      setChartData(data.chartData);
    } catch (error) {
      console.error('Error fetching recommendation data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled = !filter.selectedBusinessTypes[0]?.name || !filter.selectedRegions[0]?.name || !userId;

  const generateAnalysisText = (data, type) => {
    const recommendedDayIndex = days.indexOf(recommendedDay.slice(0, 1));
    const recommendedDaySales = data[recommendedDayIndex];
    const sortedData = [...data].sort((a, b) => a - b);
    const rank = sortedData.indexOf(recommendedDaySales) + 1;

    switch (type) {
      case 'industry':
        return `${recommendedDay}은 ${region}의 ${industry} 기준 ${rank}번째로 매출이 적으며`;
      case 'allRegions':
        return `${recommendedDay}은 전체 ${industry} 기준 ${rank}번째로 매출이 적은날이에요`;
      case 'allIndustries':
        return `${recommendedDay}은 ${region}의 전체 업종 기준 ${rank}번째로 매출이 적은날이에요`;
      default:
        return '';
    }
  };

  const getChartOptions = (title, data, type) => ({
    chart: { type: 'column' },
    title: { text: title },
    subtitle: { text: generateAnalysisText(data, type) },
    xAxis: { categories: days },
    yAxis: { title: { text: '매출 (원)' } },
    series: [{ name: '매출', data }],
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{point.y:,.0f}'
        }
      }
    }
  });

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>휴일 추천</Typography>
        <Typography variant="subtitle1" gutterBottom>
          업종과 지역을 선택하면 가장 적절한 휴무 요일을 추천해드립니다.
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="업종 선택"
              value={filter.selectedBusinessTypes[0]?.name || ''}
              onClick={() => setShowBusinessTypeFilter(prev => !prev)}
              InputProps={{ readOnly: true }}
            />
            {showBusinessTypeFilter && (
              <Box sx={{ mt: 2, mb: 2 }}>
                <BusinessTypeFilter
                  onSelect={handleIndustrySelect}
                  onDataFetched={handleBusinessTypeDataFetched}
                  initialData={businessTypeData}
                  singleSelect={true}
                />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="지역 선택"
              value={filter.selectedRegions[0]?.name || ''}
              onClick={() => setShowRegionFilter(prev => !prev)}
              InputProps={{ readOnly: true }}
            />
            {showRegionFilter && (
              <Box sx={{ mt: 2, mb: 2 }}>
                <RegionFilter
                  onSelect={handleRegionSelect}
                  onDataFetched={handleRegionDataFetched}
                  initialData={regionData}
                  singleSelect={true}
                />
              </Box>
            )}
          </Grid>
        </Grid>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={fetchRecommendationData} 
          fullWidth
          disabled={isButtonDisabled}
        >
          휴일 추천받기
        </Button>

        {isLoading ? (
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '200px', 
              mt: 4 
            }}
          >
            <CircularProgress />
            <Typography sx={{ mt: 2 }}>분석 중입니다</Typography>
          </Box>

        ) : recommendedDay ? (
          <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16 bg-white max-w-[852px]">
            <Header industry={industry} region={region} recommendedDay={recommendedDay} />
            
            {chartData.industry.length > 0 && (
              <>
                <ChartSection 
                  title={`${region} ${industry} 요일별 매출`}
                  analysisText={generateAnalysisText(chartData.industry, 'industry')}
                  chartComponent={
                    <BarChart
                      // title={`${industry} - ${region} 요일별 매출`}
                      data={chartData.industry}
                      type="industry"
                      days={days}
                    />
                  }
                />
                <ChartSection 
                  title={`${industry} 전체상권 요일별 매출`}
                  analysisText={generateAnalysisText(chartData.allIndustries, 'allIndustries')}
                  chartComponent={
                    <BarChart
                      // title={`${industry} - 전체 상권 요일별 매출`}
                      data={chartData.allIndustries}
                      type="allIndustries"
                      days={days}
                    />
                  }
                />
                <ChartSection 
                  title={`${region} 전체상권 요일별 매출`}
                  analysisText={generateAnalysisText(chartData.allRegions, 'allRegions')}
                  chartComponent={
                    <BarChart
                      // title={`${region} - 전체 업종 요일별 매출`}
                      data={chartData.allRegions}
                      type="allRegions"
                      days={days}
                    />
                  }
                />
                <ChartSection 
                  title="요일별 매출 비교"
                  analysisText="3개 그래프를 한눈에 비교하세요"
                  chartComponent={
                    <CombinedChart
                      industryData={chartData.industry}
                      allRegionsData={chartData.allRegions}
                      allIndustriesData={chartData.allIndustries}
                      days={days}
                    />
                  }
                />
              </>
            )}
          </div>
        ) : null}
      </Paper>
    </Container>
  );
};

export default Holiday;