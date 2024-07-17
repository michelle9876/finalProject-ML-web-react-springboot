import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Chip, Stack } from '@mui/material';

// 목업 데이터
const mockData = {
  districts: [
    { code: '11140', name: '강남구' },
    { code: '11170', name: '강동구' },
    { code: '11180', name: '강북구' },
  ],
  neighborhoods: {
    '11140': [
      { code: '11140590', name: '개포동' },
      { code: '11140600', name: '논현동' },
      { code: '11140610', name: '대치동' },
    ],
    '11170': [
      { code: '11170510', name: '강일동' },
      { code: '11170520', name: '고덕동' },
    ],
    '11180': [
      { code: '11180510', name: '미아동' },
      { code: '11180520', name: '번동' },
    ],
  },
  commercialAreas: {
    '11140590': [
      { code: '3130032', name: '개포동역', latitude: 37.56700134277344, longitude: 127.17621612548828 },
    ],
    '11140600': [
      { code: '3130033', name: '논현역', latitude: 37.56800134277344, longitude: 127.17721612548828 },
    ],
    '11140610': [
      { code: '3130034', name: '대치역', latitude: 37.56900134277344, longitude: 127.17821612548828 },
    ],
  },
};

const RegionFilter = ({ onSelect }) => {
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);
  const [commercialAreas, setCommercialAreas] = useState([]);
  const [selectedCommercialAreas, setSelectedCommercialAreas] = useState([]);

  useEffect(() => {
    setDistricts(mockData.districts);
  }, []);

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    setNeighborhoods(mockData.neighborhoods[district.code]);
    setSelectedNeighborhood(null);
    setCommercialAreas([]);
    // 구를 변경해도 선택된 상권 유지
  };

  const handleNeighborhoodSelect = (neighborhood) => {
    setSelectedNeighborhood(neighborhood);
    // 매칭되는 상권이 없는 경우 빈 배열 할당
    setCommercialAreas(mockData.commercialAreas[neighborhood.code] || []);
  };

  const handleCommercialAreaToggle = (area) => {
    setSelectedCommercialAreas(prev => 
      prev.some(a => a.code === area.code) 
        ? prev.filter(a => a.code !== area.code) 
        : [...prev, area]
    );
    onSelect(selectedCommercialAreas);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>지역선택(상권)</Typography>
      <Button variant="outlined" sx={{ mb: 2 }}>지도로 선택</Button>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="subtitle2">구 선택</Typography>
          {districts.map(district => (
            <Button 
              key={district.code} 
              onClick={() => handleDistrictSelect(district)}
              variant={selectedDistrict === district ? "contained" : "outlined"}
              fullWidth
              sx={{ mb: 1 }}
            >
              {district.name}
            </Button>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle2">동 선택</Typography>
          {neighborhoods.map(neighborhood => (
            <Button 
              key={neighborhood.code} 
              onClick={() => handleNeighborhoodSelect(neighborhood)}
              variant={selectedNeighborhood === neighborhood ? "contained" : "outlined"}
              fullWidth
              sx={{ mb: 1 }}
            >
              {neighborhood.name}
            </Button>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle2">상권 선택</Typography>
          {commercialAreas.length > 0 ? (
            commercialAreas.map(area => (
              <Button 
                key={area.code} 
                onClick={() => handleCommercialAreaToggle(area)}
                variant={selectedCommercialAreas.some(a => a.code === area.code) ? "contained" : "outlined"}
                fullWidth
                sx={{ mb: 1 }}
              >
                {area.name}
              </Button>
            ))
          ) : (
            <Typography variant="body2">선택 가능한 상권이 없습니다.</Typography>
          )}
        </Grid>
      </Grid>
      <Typography variant="subtitle2" sx={{ mt: 2 }}>선택한 상권</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {selectedCommercialAreas.map(area => (
          <Chip
            key={area.code}
            label={area.name}
            onDelete={() => handleCommercialAreaToggle(area)}
            variant="outlined"
          />
        ))}
      </Stack>
    </div>
  );
};

export default RegionFilter;