import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, TextField, MenuItem, Button, Box } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// 목업 데이터
const mockApiResponse = {
  "홍대입구": {
    "편의점": {
      "recommendedDay": "월",
      "chartData": {
        "industry": [500, 600, 700, 800, 900, 1000, 1100],
        "allRegions": [5000, 5500, 6000, 6500, 7000, 7500, 8000],
        "allIndustries": [10000, 11000, 12000, 13000, 14000, 15000, 16000]
      }
    },
    "커피전문점": {
      "recommendedDay": "화",
      "chartData": {
        "industry": [600, 550, 700, 750, 800, 900, 1000],
        "allRegions": [1000, 7000, 6000, 6500, 7000, 7500, 8000],
        "allIndustries": [11000, 10000, 12000, 13000, 14000, 15000, 16000]
      }
    },
    "한식음식점": {
      "recommendedDay": "수",
      "chartData": {
        "industry": [700, 750, 650, 800, 850, 900, 1000],
        "allRegions": [9000, 6500, 5500, 7000, 7500, 8000, 8500],
        "allIndustries": [12000, 13000, 11000, 14000, 15000, 16000, 17000]
      }
    }
  },
  // 다른 지역에 대한 데이터도 비슷한 구조로 추가
};

const Content4 = () => {
  const [industry, setIndustry] = useState('');
  const [region, setRegion] = useState('');
  const [recommendedDay, setRecommendedDay] = useState('');
  const [chartData, setChartData] = useState({
    industry: [],
    allRegions: [],
    allIndustries: []
  });

  const industries = ['편의점', '커피전문점', '한식음식점'];
  const regions = ['홍대입구'];
  const days = ['월', '화', '수', '목', '금', '토', '일'];

  useEffect(() => {
    if (industry && region) {
      fetchMockData();
    }
  }, [industry, region]);

  const fetchMockData = () => {
    const data = mockApiResponse[region][industry];
    setRecommendedDay(data.recommendedDay);
    setChartData(data.chartData);
  };

  const generateAnalysisText = (data, type) => {
    const recommendedDayIndex = days.indexOf(recommendedDay);
    const recommendedDaySales = data[recommendedDayIndex];
    const sortedData = [...data].sort((a, b) => a - b);
    const rank = sortedData.indexOf(recommendedDaySales) + 1;

    switch (type) {
      case 'industry':
        return `${recommendedDay}요일은 ${region}의 ${industry} 기준 ${rank}번째로 매출이 적으며`;
      case 'allRegions':
        return `${recommendedDay}요일은 전체 ${industry} 기준 ${rank}번째로 매출이 적은날이에요`;
      case 'allIndustries':
        return `${recommendedDay}요일은 ${region}의 전체 업종 기준 ${rank}번째로 매출이 적은날이에요`;
      default:
        return '';
    }
  };

  const getChartOptions = (title, data, type) => ({
    chart: { type: 'column' },
    title: { text: title },
    subtitle: { text: generateAnalysisText(data, type) },
    xAxis: { categories: days },
    yAxis: { title: { text: '매출 (만원)' } },
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
              select
              fullWidth
              label="업종 선택"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              {industries.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="지역 선택"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              {regions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" onClick={fetchMockData} fullWidth>
          휴일 추천받기
        </Button>

        {recommendedDay && (
          <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              추천 휴일: {recommendedDay}요일
            </Typography>
            <Typography variant="body1">
              {region}의 {industry} 업종에서 가장 적절한 휴무일은 {recommendedDay}요일입니다.
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