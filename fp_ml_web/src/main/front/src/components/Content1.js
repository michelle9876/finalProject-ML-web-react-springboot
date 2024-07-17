import React, { useState } from 'react';
import { Container, Paper, Typography, Grid } from '@mui/material';
import RegionFilter from './RegionFilter';
import BusinessTypeFilter from './BusinessTypeFilter';

const Content1 = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedBusinessType, setSelectedBusinessType] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>AI맞춤추천</Typography>
        <Typography variant="subtitle1" gutterBottom>은서님! 원하는 조건을 입력해주세요</Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <RegionFilter onSelect={setSelectedRegion} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BusinessTypeFilter onSelect={setSelectedBusinessType} />
          </Grid>
        </Grid>

        {/* 임대료 및 면적 입력 필드 추가 */}
        {/* 추천받기 버튼 추가 */}
      </Paper>
    </Container>
  );
};

export default Content1;