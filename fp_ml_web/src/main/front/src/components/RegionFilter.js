import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Chip, Stack, Box } from '@mui/material';
import axios from 'axios';
import './CommonFilter.css';  // CSS 파일 import

const RegionFilter = ({ onSelect }) => {
  const [allData, setAllData] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);
  const [commercialAreas, setCommercialAreas] = useState([]);
  const [selectedCommercialAreas, setSelectedCommercialAreas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (districts.length > 0 && !selectedDistrict) {
      handleDistrictSelect(districts[0]);
    }
  }, [districts]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/districts');
      setAllData(response.data);
      const uniqueDistricts = [...new Set(response.data.map(item => item.district_name))];
      setDistricts(uniqueDistricts.map(name => ({ name })));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    const filteredData = allData.filter(item => item.district_name === district.name);
    const uniqueNeighborhoods = [...new Set(filteredData.map(item => item.administrative_dong_name))];
    setNeighborhoods(uniqueNeighborhoods.map(name => ({ name })));
    setSelectedNeighborhood(null);
    setCommercialAreas([]);
  };

  const handleNeighborhoodSelect = (neighborhood) => {
    setSelectedNeighborhood(neighborhood);
    const filteredData = allData.filter(
      item => item.district_name === selectedDistrict.name && 
              item.administrative_dong_name === neighborhood.name
    );
    const uniqueCommercialAreas = [...new Set(filteredData.map(item => item.business_district_name))];
    setCommercialAreas(uniqueCommercialAreas.map(name => ({ name })));
  };

  const handleCommercialAreaToggle = (area) => {
    setSelectedCommercialAreas(prev => {
      const newSelection = prev.some(a => a.name === area.name) 
        ? prev.filter(a => a.name !== area.name) 
        : [...prev, area];
      onSelect(newSelection);  // 여기서 바로 부모 컴포넌트에 알림
      return newSelection;
    });
  };

  return (
    <Box className="filter-container">
      <Typography variant="h6" className="filter-title">지역선택(상권)</Typography>
      <Grid container spacing={2} >
        <Grid item xs={4} className="filter-column">
          <Typography variant="subtitle2" className="filter-subtitle">구 선택</Typography>
          <Box className="scroll-box">
            {districts.map(district => (
              <Button 
                key={district.name} 
                onClick={() => handleDistrictSelect(district)}
                variant={selectedDistrict?.name === district.name ? "contained" : "outlined"}
                className="filter-button"
              >
                {district.name}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={4} className="filter-column">
          <Typography variant="subtitle2" className="filter-subtitle">동 선택</Typography>
          <Box className="scroll-box">
            {neighborhoods.map(neighborhood => (
              <Button 
                key={neighborhood.name} 
                onClick={() => handleNeighborhoodSelect(neighborhood)}
                variant={selectedNeighborhood?.name === neighborhood.name ? "contained" : "outlined"}
                className="filter-button"
              >
                {neighborhood.name}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={4} className="filter-column">
          <Typography variant="subtitle2" className="filter-subtitle">상권 선택</Typography>
          <Box className="scroll-box">
            {commercialAreas.length > 0 ? (
              commercialAreas.map(area => (
                <Button 
                  key={area.name} 
                  onClick={() => handleCommercialAreaToggle(area)}
                  variant={selectedCommercialAreas.some(a => a.name === area.name) ? "contained" : "outlined"}
                  className="filter-button"
                >
                  {area.name}
                </Button>
              ))
            ) : (
              <Typography variant="body2">동을 선택해주세요</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
      <Typography variant="subtitle2" className="filter-subtitle" style={{ marginTop: '1rem' }}>선택한 상권</Typography>
      <Box className="selected-items-container">
        {selectedCommercialAreas.length > 0 ? (
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ '& .filter-chip': { margin: '3px' } }}>
            {selectedCommercialAreas.map(area => (
              <Chip
                key={area.name}
                label={area.name}
                onDelete={() => handleCommercialAreaToggle(area)}
                variant="outlined"
                className="filter-chip"
              />
            ))}
          </Stack>
        ) : (
          <Typography variant="body2" className="selected-items-message">
            상권을 선택하세요
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default RegionFilter;