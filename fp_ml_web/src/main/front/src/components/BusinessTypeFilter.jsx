import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter, setBusinessTypeData } from '../redux/modules/filter';
import { Typography, Button, Grid, Chip, Stack, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

const BusinessTypeFilter = ({ onDataFetched, singleSelect = false, maxSelect = 5, mobileResponsive = false }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const { selectedBusinessTypes, businessTypeData } = filter;
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [businessTypes, setBusinessTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!businessTypeData) {
      fetchData();
    } else {
      processData(businessTypeData);
    }
  }, [businessTypeData]);  

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/service-industries');
      dispatch(setBusinessTypeData(response.data));
      onDataFetched(response.data);
      processData(response.data);
    } catch (error) {
      console.error('Error fetching business type data:', error);
      setError('업종 데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };
  
  const processData = (data) => {
    if (!data) return;
    const uniqueCategories = [...new Set(data.map(item => item.service_industry_category))];
    setCategories(uniqueCategories.map(name => ({ name })));
    if (uniqueCategories.length > 0) {
      handleCategorySelect({ name: uniqueCategories[0] }, data);
    }
  };

  const handleCategorySelect = (category, data = businessTypeData) => {
    if (!data) return;
    setSelectedCategory(category);
    const filteredData = data.filter(item => item.service_industry_category === category.name);
    setBusinessTypes(filteredData.map(item => ({
      code: item.serviceIndustry_id.toString(),
      name: item.service_industry_name
    })));
  };

  const handleBusinessTypeToggle = (businessType) => {
    if (singleSelect) {
      dispatch(setFilter({ selectedBusinessTypes: [businessType] }));
    } else {
      const newSelection = selectedBusinessTypes.some(b => b.code === businessType.code)
        ? selectedBusinessTypes.filter(b => b.code !== businessType.code)
        : [...selectedBusinessTypes, businessType];
      if (newSelection.length <= maxSelect) {
        dispatch(setFilter({ selectedBusinessTypes: newSelection }));
      }
    }
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box className={`filter-container ${mobileResponsive ? 'mobile-responsive' : ''}`}>
      <Typography variant="h6" className="filter-title">업종선택</Typography>
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
            <Grid item xs={6} className="filter-column">
              <Typography variant="subtitle2" className="filter-subtitle">대카테고리 선택</Typography>
              <Box className="scroll-box">
                {categories.map(category => (
                  <Button 
                    key={category.name} 
                    onClick={() => handleCategorySelect(category)}
                    variant={selectedCategory?.name === category.name ? "contained" : "outlined"}
                    className="filter-button"
                  >
                    {category.name}
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid item xs={6} className="filter-column">
              <Typography variant="subtitle2" className="filter-subtitle">업종 선택</Typography>
              <Box className="scroll-box">
                {businessTypes.map(businessType => (
                  <Button 
                    key={businessType.code} 
                    onClick={() => handleBusinessTypeToggle(businessType)}
                    variant={selectedBusinessTypes.some(b => b.code === businessType.code) ? "contained" : "outlined"}
                    className="filter-button"
                  >
                    {businessType.name}
                  </Button>
                ))}
              </Box>
            </Grid>
          </>
        )}
      </Grid>
      {!singleSelect && (
        <>
          <Typography variant="subtitle2" className="filter-subtitle">선택한 업종</Typography>
          <Box className="selected-items-container">
            {selectedBusinessTypes.length > 0 ? (
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={0.5} >
                {selectedBusinessTypes.map(businessType => (
                  <Chip
                    key={businessType.code}
                    label={businessType.name}
                    onDelete={() => handleBusinessTypeToggle(businessType)}
                    variant="outlined"
                    className="filter-chip"
                  />
                ))}
              </Stack>
            ) : (
              <Typography variant="body2" className="selected-items-message">
                업종을 선택하세요
              </Typography>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}

export default BusinessTypeFilter;