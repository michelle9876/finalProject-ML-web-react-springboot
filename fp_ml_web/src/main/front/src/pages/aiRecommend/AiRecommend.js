import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Paper, Typography, Grid, TextField, Button, Snackbar, Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import RegionFilter from '../../components/RegionFilter';
import BusinessTypeFilter from '../../components/BusinessTypeFilter';
import { setFilter, selectFilter } from '../../redux/modules/filter';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const AiRecommend = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [businessTypeData, setBusinessTypeData] = useState(null);
  const [regionData, setRegionData] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
    // Load filter data from session storage
    const savedFilter = sessionStorage.getItem('filterData');
    if (savedFilter) {
      dispatch(setFilter(JSON.parse(savedFilter)));
    }
  }, [dispatch]);

  // const handleRegionSelect = (regions) => {
  //   dispatch(setFilter({ selectedRegions: regions }));
  // };

  // const handleBusinessTypeSelect = (businessTypes) => {
  //   dispatch(setFilter({ selectedBusinessTypes: businessTypes }));
  // };

  const handleBusinessTypeDataFetched = (data) => {
    setBusinessTypeData(data);
  };

  const handleRegionDataFetched = (data) => {
    setRegionData(data);
  };

  const handleRecommendation = (e) => {
    e.preventDefault(); // 추가
    const userId = localStorage.getItem('userId');
    const filterData = {
      userId: parseInt(userId),
      service_industry_name: filter.selectedBusinessTypes.map(type => type.name),
      business_district_name: filter.selectedRegions.map(region => region.name),
      rent_fee_select: { 
        min: parseInt(filter.rentMin) * 10000,
        max: parseInt(filter.rentMax) * 10000
      },
      rent_area: {
        min: parseInt(filter.areaMin),
        max: parseInt(filter.areaMax)
      }
    };
  
    console.log('Recommendation request data:', filterData);
    sessionStorage.setItem('filterData', JSON.stringify(filter));
    navigate('/recommend/ranking');
  };

  // if (showResults) {
  //   return <RecommendationResults filterData={filter} />;
  // }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, width: '100%', maxWidth: '900px' }}>
      <Paper sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography variant="h4" gutterBottom>AI맞춤추천</Typography>
        <Typography variant="subtitle1" gutterBottom>
          {nickname ? `${nickname}님!` : '안녕하세요!'} 원하는 조건을 입력해주세요. 조건을 입력하지 않으면 전체 데이터 기준으로 추천됩니다.
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <RegionFilter 
              onDataFetched={handleRegionDataFetched}
              initialData={regionData}
              mobileResponsive={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BusinessTypeFilter 
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
                  value={filter.rentMin}
                  onChange={(e) => dispatch(setFilter({ rentMin: e.target.value }))}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="최대"
                  type="number"
                  value={filter.rentMax}
                  onChange={(e) => dispatch(setFilter({ rentMax: e.target.value }))}
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
                  value={filter.areaMin}
                  onChange={(e) => dispatch(setFilter({ areaMin: e.target.value }))}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="최대"
                  type="number"
                  value={filter.areaMax}
                  onChange={(e) => dispatch(setFilter({ areaMax: e.target.value }))}
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

export default AiRecommend;