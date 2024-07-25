import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  AppBar, Toolbar, Typography, Button, Container, Grid, Paper,
  ThemeProvider, createTheme, CssBaseline, BottomNavigation, BottomNavigationAction, Box, useMediaQuery
} from '@mui/material';
import { Home as HomeIcon, Recommend, Map, CheckCircle, BeachAccess, PersonSearch } from '@mui/icons-material';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';
import Container1 from './components/Container';
import MapComponent from './components/MapComponent';
import NicknameInputDialog from './components/NicknameInputDialog';
import './index.css';

// 커스텀 테마 생성
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // 인디고 색상
    },
    secondary: {
      main: '#becefc', // 핑크 색상
    },
  },
});

const TopNav = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
          <PersonSearch sx={{ mr: 1 }} />사장님 구해요
        </Typography>
        {!isMobile && (
          <>
            <Button color="inherit" onClick={() => navigate('/')}>{<HomeIcon sx={{ mr: 1 }} />}홈</Button>
            <Button color="inherit" onClick={() => navigate('/content1')}>{<Recommend sx={{ mr: 1 }} />}AI 맞춤 추천</Button>
            <Button color="inherit" onClick={() => navigate('/content2')}>{<Map sx={{ mr: 1 }} />}랭킹 in 지도</Button>
            <Button color="inherit" onClick={() => navigate('/content3')}>{<CheckCircle sx={{ mr: 1 }} />}확인하기</Button>
            <Button color="inherit" onClick={() => navigate('/content4')}>{<BeachAccess sx={{ mr: 1 }} />}휴일추천</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

// 하단 네비게이션 컴포넌트
const BottomNav = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('/');

  useEffect(() => {
    navigate(value);
  }, [value]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1201 }}
    >
      <BottomNavigationAction label="AI 맞춤 추천" value="/content1" icon={<Recommend />} />
      <BottomNavigationAction label="랭킹 in 지도" value="/content2" icon={<Map />} />
      <BottomNavigationAction label="홈" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="확인하기" value="/content3" icon={<CheckCircle />} />
      <BottomNavigationAction label="휴일추천" value="/content4" icon={<BeachAccess />} />
    </BottomNavigation>
  );
};

// 홈 컴포넌트
const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const contents = [
    { id: 1, title: ['어디에 어떤 업종?', 'AI 맞춤 추천'], path: '/content1' },
    { id: 2, title: ['지도로 한눈에 확인', '랭킹 IN 지도'], path: '/content2' },
    { id: 3, title: ['내 생각이 맞을까?', '확인하기'], path: '/content3' },
    { id: 4, title: ['휴일 추천해요', '휴일 추천'], path: '/content4' },
    { id: 5, title: ['테스트', '테스트'], path: '/container' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 2, mb: 4 }}>
        <MapComponent />
      </Paper>
      <Grid container spacing={2}>
        {contents.map((item) => (
          <Grid item xs={6} key={item.id}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => handleNavigation(item.path)}
              sx={{
                height: '100px',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                },
              }}
            >
              <Typography component="div">
                {item.title.map((line, index) => (
                  <React.Fragment key={index}>
                    {index === 1 ? (
                      <span
                        style={{
                          fontSize: '1.4rem', // 글자 크기 조정
                          fontWeight: 'bold', // 글자 굵게
                          display: 'block', // 블록 요소로 설정하여 줄간격 적용
                          lineHeight: '0.7', // 줄간격 설정
                        }}
                      >
                        {line}
                      </span>
                    ) : (
                      <span
                        style={{
                          display: 'block', // 블록 요소로 설정하여 줄간격 적용
                          lineHeight: '0.7', // 줄간격 설정
                        }}
                      >
                        {line}
                      </span>
                    )}
                    {index < item.title.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// 메인 App 컴포넌트
const App = () => {
  const [data, setData] = useState('');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    axios.get('/api/data')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <TopNav isMobile={isMobile} />
        <Box sx={{ pb: isMobile ? 7 : 0 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content1" element={<Content1 />} />
            <Route path="/content2" element={<Content2 />} />
            <Route path="/content3" element={<Content3 />} />
            <Route path="/content4" element={<Content4 />} />
            <Route path="/container" element={<Container1 />} />
          </Routes>
        </Box>
        {isMobile && <BottomNav />}
        <NicknameInputDialog />
      </Router>
    </ThemeProvider>
  );
};

export default App;