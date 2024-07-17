import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Chip, Stack } from '@mui/material';

const mockData = {
  categories: [
    { code: '01', name: '외식업' },
    { code: '02', name: '서비스업' },
    { code: '03', name: '소매업' },
  ],
  businessTypes: {
    '01': [
      { code: '0101', name: '한식음식' },
      { code: '0102', name: '중식음식' },
      { code: '0103', name: '일식음식' },
    ],
    '02': [
      { code: '0201', name: '미용실' },
      { code: '0202', name: '네일샵' },
    ],
    '03': [
      { code: '0301', name: '편의점' },
      { code: '0302', name: '슈퍼마켓' },
    ],
  },
};

const BusinessTypeFilter = ({ onSelect }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [businessTypes, setBusinessTypes] = useState([]);
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([]);

  useEffect(() => {
    setCategories(mockData.categories);
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setBusinessTypes(mockData.businessTypes[category.code]);
    // 카테고리를 변경해도 선택된 업종 유지
  };

  const handleBusinessTypeToggle = (businessType) => {
    setSelectedBusinessTypes(prev => 
      prev.some(b => b.code === businessType.code) 
        ? prev.filter(b => b.code !== businessType.code) 
        : [...prev, businessType]
    );
    onSelect(selectedBusinessTypes);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>업종선택</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle2">대카테고리 선택</Typography>
          {categories.map(category => (
            <Button 
              key={category.code} 
              onClick={() => handleCategorySelect(category)}
              variant={selectedCategory === category ? "contained" : "outlined"}
              fullWidth
              sx={{ mb: 1 }}
            >
              {category.name}
            </Button>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2">업종 선택</Typography>
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
        </Grid>
      </Grid>
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
    </div>
  );
};

export default BusinessTypeFilter;