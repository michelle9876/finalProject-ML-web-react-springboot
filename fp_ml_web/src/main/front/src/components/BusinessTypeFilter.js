import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Chip, Stack, Box } from '@mui/material';
import axios from 'axios';
import './RegionFilter.css';  // 스크롤 스타일을 위해 CSS 파일 import

const BusinessTypeFilter = ({ onSelect, singleSelect = false }) => {
  const [allData, setAllData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [businessTypes, setBusinessTypes] = useState([]);
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/service-industries');
      setAllData(response.data);
      const uniqueCategories = [...new Set(response.data.map(item => item.service_industry_category))];
      setCategories(uniqueCategories.map(name => ({ name })));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    const filteredData = allData.filter(item => item.service_industry_category === category.name);
    setBusinessTypes(filteredData.map(item => ({
      code: item.serviceIndustry_id.toString(),
      name: item.service_industry_name
    })));
  };

  const handleBusinessTypeToggle = (businessType) => {
    if (singleSelect) {
      const newSelection = [businessType];
      setSelectedBusinessTypes(newSelection);
      onSelect(newSelection);
    } else {
      setSelectedBusinessTypes(prev => {
        const newSelection = prev.some(b => b.code === businessType.code) 
          ? prev.filter(b => b.code !== businessType.code) 
          : [...prev, businessType];
        onSelect(newSelection);
        return newSelection;
      });
    }
  };

  return (
    <Box className="scroll-box" sx={{ maxHeight: '600px', overflow: 'auto' }}>
      <Typography variant="h6" gutterBottom>업종선택</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle2">대카테고리 선택</Typography>
          <Box className="scroll-box" sx={{ maxHeight: '300px', overflow: 'auto' }}>
            {categories.map(category => (
              <Button 
                key={category.name} 
                onClick={() => handleCategorySelect(category)}
                variant={selectedCategory?.name === category.name ? "contained" : "outlined"}
                fullWidth
                sx={{ mb: 1 }}
              >
                {category.name}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2">업종 선택</Typography>
          <Box className="scroll-box" sx={{ maxHeight: '300px', overflow: 'auto' }}>
            {businessTypes.map(businessType => (
              <Button 
                key={businessType.code} 
                onClick={() => handleBusinessTypeToggle(businessType)}
                variant={selectedBusinessTypes.some(b => b.code === businessType.code) ? "contained" : "outlined"}
                fullWidth
                sx={{ mb: 1 }}
              >
                {businessType.name}
              </Button>
            ))}
          </Box>
        </Grid>
      </Grid>
      {!singleSelect && (
        <>
          <Typography variant="subtitle2" sx={{ mt: 2 }}>선택한 업종</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {selectedBusinessTypes.map(businessType => (
              <Chip
                key={businessType.code}
                label={businessType.name}
                onDelete={() => handleBusinessTypeToggle(businessType)}
                variant="outlined"
              />
            ))}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default BusinessTypeFilter;