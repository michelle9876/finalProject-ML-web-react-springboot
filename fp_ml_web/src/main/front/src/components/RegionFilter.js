import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Chip, Stack, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import './CommonFilter.css';

const RegionFilter = ({ onSelect, onDataFetched, singleSelect = false, initialData, maxSelect = 5, mobileResponsive = false }) => {
  const [allData, setAllData] = useState(initialData || []);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);
  const [commercialAreas, setCommercialAreas] = useState([]);
  const [selectedCommercialAreas, setSelectedCommercialAreas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialData) {
      fetchData();
    } else {
      processData(initialData);
    }
  }, [initialData]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/districts');
      setAllData(response.data);
      onDataFetched(response.data);
      processData(response.data);
    } catch (error) {
      console.error('Error fetching region data:', error);
      setError('상권 데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const processData = (data) => {
    const uniqueDistricts = [...new Set(data.map(item => item.district_name))];
    setDistricts(uniqueDistricts.map(name => ({ name })));
    if (uniqueDistricts.length > 0) {
      handleDistrictSelect({ name: uniqueDistricts[0] });
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
    if (singleSelect) {
      const newSelection = [area];
      setSelectedCommercialAreas(newSelection);
      onSelect(newSelection);
    } else {
      setSelectedCommercialAreas(prev => {
        const newSelection = prev.some(a => a.name === area.name) 
          ? prev.filter(a => a.name !== area.name) 
          : [...prev, area];
        if (newSelection.length <= maxSelect) {
          onSelect(newSelection);
          return newSelection;
        } else {
          // 최대 선택 개수를 초과했을 때 사용자에게 알림을 줄 수 있습니다.
          return prev;
        }
      });
    }
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box className={`filter-container ${mobileResponsive ? 'mobile-responsive' : ''}`}>
      <Typography variant="h6" className="filter-title">지역선택(상권)</Typography>
      <Grid container spacing={1} style={{ position: 'relative', minHeight: '200px' }}>
        {loading ? (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            zIndex: 1 
          }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
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
            </>
        )}
      </Grid>
      {!singleSelect && (
        <>
          <Typography variant="subtitle2" className="filter-subtitle">선택한 상권</Typography>
          <Box className="selected-items-container">
            {selectedCommercialAreas.length > 0 ? (
              <Stack direction="row" spacing={1} flexWrap="wrap">
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
        </>
      )}
    </Box>
  );
};

export default RegionFilter;