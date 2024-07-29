import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, TextField, Button, Snackbar, Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import RegionFilter from './RegionFilter';
import BusinessTypeFilter from './BusinessTypeFilter';
import RecommendationResults from './RecommendationResults';
import axios from 'axios';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Content1 = () => {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([]);
  const [nickname, setNickname] = useState('');
  const [rentMin, setRentMin] = useState('');
  const [rentMax, setRentMax] = useState('');
  const [areaMin, setAreaMin] = useState('');
  const [areaMax, setAreaMax] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [businessTypeData, setBusinessTypeData] = useState(null);
  const [regionData, setRegionData] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  const handleRegionSelect = (regions) => {
    setSelectedRegions(regions);
  };

  const handleBusinessTypeSelect = (businessTypes) => {
    setSelectedBusinessTypes(businessTypes);
  };

  const handleBusinessTypeDataFetched = (data) => {
    setBusinessTypeData(data);
  };

  const handleRegionDataFetched = (data) => {
    setRegionData(data);
  };

  const handleRecommendation = async () => {
    const userId = localStorage.getItem('userId');
    const data = {
      userId: parseInt(userId),
      service_industry_name: selectedBusinessTypes.map(type => type.name),
      business_district_name: selectedRegions.map(region => region.name),
      rent_fee_select: { 
        min: parseInt(rentMin) * 10000,
        max: parseInt(rentMax) * 10000
      },
      rent_area: {
        min: parseInt(areaMin),
        max: parseInt(areaMax)
      }
    };
  
    console.log('Recommendation request data:', data);
    setFilterData(data);
    setShowResults(true);
  };

  if (showResults) {
    return <RecommendationResults filterData={filterData} />;
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container 
      maxWidth="md" // "lg"에서 "md"로 변경
      sx={{ 
        mt: 4,
        width: '100%',
        maxWidth: '900px', // 원하는 최대 너비로 설정
      }}
    >
      <Paper sx={{ p: { xs: 2, sm: 3 } }}> {/* 반응형 패딩 */}
        <Typography variant="h4" gutterBottom>AI맞춤추천</Typography>
        <Typography variant="subtitle1" gutterBottom>
          {nickname ? `${nickname}님!` : '안녕하세요!'} 원하는 조건을 입력해주세요
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <RegionFilter 
              onSelect={handleRegionSelect} 
              onDataFetched={handleRegionDataFetched}
              initialData={regionData}
              mobileResponsive={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BusinessTypeFilter 
              onSelect={handleBusinessTypeSelect} 
              onDataFetched={handleBusinessTypeDataFetched}
              initialData={businessTypeData}
              singleSelect={false} 
              maxSelect={500} 
              mobileResponsive={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" gutterBottom>임대료 (만원)</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="최소"
                  type="number"
                  value={rentMin}
                  onChange={(e) => setRentMin(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="최대"
                  type="number"
                  value={rentMax}
                  onChange={(e) => setRentMax(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" gutterBottom>면적 (m²)</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="최소"
                  type="number"
                  value={areaMin}
                  onChange={(e) => setAreaMin(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="최대"
                  type="number"
                  value={areaMax}
                  onChange={(e) => setAreaMax(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              onClick={handleRecommendation}
            >
              추천받기
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Content1;