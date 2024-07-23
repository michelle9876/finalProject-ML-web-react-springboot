import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, TextField, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import RegionFilter from './RegionFilter';
import BusinessTypeFilter from './BusinessTypeFilter';
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
      industry_name: selectedBusinessTypes.map(type => type.name),
      district_name: selectedRegions.map(region => region.name),
      rent_fee_select: { 
        min: parseInt(rentMin) * 10000, // 만원 단위를 원 단위로 변환
        max: parseInt(rentMax) * 10000
      },
      rent_area: {
        min: parseInt(areaMin),
        max: parseInt(areaMax)
      }
    };
  
    console.log('Selected Regions:', selectedRegions);
    console.log('Selected Business Types:', selectedBusinessTypes);
  
    try {
      // API가 완성되면 아래 주석을 해제하고 사용하세요
      // const response = await axios.post('/api/selections', data);
      // console.log(response.data);
      
      // 임시로 콘솔에 데이터를 출력합니다
      console.log('Recommendation request data:', data);
      setSnackbarMessage('추천 요청이 전송되었습니다. (개발 중)');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error sending recommendation request:', error);
      setSnackbarMessage('추천 요청 중 오류가 발생했습니다.');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };



  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>AI맞춤추천</Typography>
        <Typography variant="subtitle1" gutterBottom>
          {nickname ? `${nickname}님!` : '안녕하세요!'} 원하는 조건을 입력해주세요
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <RegionFilter 
              onSelect={handleRegionSelect} 
              onDataFetched={handleRegionDataFetched}
              initialData={regionData}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BusinessTypeFilter 
              onSelect={handleBusinessTypeSelect} 
              onDataFetched={handleBusinessTypeDataFetched}
              initialData={businessTypeData}
              singleSelect={false} 
              maxSelect={500} 
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