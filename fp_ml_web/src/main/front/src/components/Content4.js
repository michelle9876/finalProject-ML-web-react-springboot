import React, { useState, useEffect, useCallback } from 'react';
import { Container, Paper, Typography, Grid, TextField, Button, Box } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import BusinessTypeFilter from './BusinessTypeFilter';
import RegionFilter from './RegionFilter';

const Content4 = () => {
  const [industry, setIndustry] = useState('');
  const [region, setRegion] = useState('');
  const [recommendedDay, setRecommendedDay] = useState('');
  const [chartData, setChartData] = useState({
    industry: [],
    allRegions: [],
    allIndustries: []
  });
  const [showBusinessTypeFilter, setShowBusinessTypeFilter] = useState(false);
  const [showRegionFilter, setShowRegionFilter] = useState(false);
  const [userId, setUserId] = useState(null);
  const [businessTypeData, setBusinessTypeData] = useState(null);
  const [regionData, setRegionData] = useState(null);

  const days = ['월', '화', '수', '목', '금', '토', '일'];

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    if (industry && region && userId) {
      fetchRecommendationData();
    }
  }, [industry, region, userId]);

  const fetchRecommendationData = async () => {
    try {
      const response = await axios.post('/api/holiday-recommendation', null, {
        params: {
          serviceIndustryName: industry,
          businessDistrictName: region,
          userId: userId
        }
      });
      const data = response.data;
      setRecommendedDay(data.recommendedDay);
      setChartData(data.chartData);
    } catch (error) {
      console.error('Error fetching recommendation data:', error);
    }
  };

  const handleIndustrySelect = (selected) => {
    if (selected && selected.length > 0) {
      setIndustry(selected[0].name);
      setShowBusinessTypeFilter(false);
    }
  };

  const handleRegionSelect = (selected) => {
    if (selected && selected.length > 0) {
      setRegion(selected[0].name);
      setShowRegionFilter(false);
    }
  };

  const handleBusinessTypeDataFetched = useCallback((data) => {
    setBusinessTypeData(data);
  }, []);

  const handleRegionDataFetched = useCallback((data) => {
    setRegionData(data);
  }, []);

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
              value={industry}
              onClick={() => setShowBusinessTypeFilter(!showBusinessTypeFilter)}
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
              value={region}
              onClick={() => setShowRegionFilter(!showRegionFilter)}
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
          disabled={!industry || !region || !userId}
        >
          휴일 추천받기
        </Button>

        {recommendedDay && (
          <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              추천 휴일: {recommendedDay}
            </Typography>
            <Typography variant="body1">
              {region}의 {industry} 업종에서 가장 적절한 휴무일은 {recommendedDay}입니다.
            </Typography>
          </Box>
        )}

        {chartData.industry.length > 0 && (
          <>
            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
              {region}의 {industry}은
            </Typography>
            <Box sx={{ mt: 3 }}>
              <HighchartsReact
                highcharts={Highcharts}
                options={getChartOptions(`${industry} - ${region} 요일별 매출`, chartData.industry, 'industry')}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <HighchartsReact
                highcharts={Highcharts}
                options={getChartOptions(`${industry} - 전체 상권 요일별 매출`, chartData.allRegions, 'allRegions')}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <HighchartsReact
                highcharts={Highcharts}
                options={getChartOptions(`${region} - 전체 업종 요일별 매출`, chartData.allIndustries, 'allIndustries')}
              />
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Content4;