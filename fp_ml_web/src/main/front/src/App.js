import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './redux/configureStore';
import { ReactQueryDevtools } from 'react-query/devtools';

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
import TopNav from './components/navigation/TopNav';
import BottomNav from './components/navigation/BottomNav';
import MapComponent from './components/MapComponent';
import NicknameInputDialog from './components/NicknameInputDialog';
import './index.css';
import './App.css';
import AiRecommend from './pages/aiRecommend/AiRecommend';
// import Detail from './pages/aiRecommend/Detail';
import Ranking from './pages/aiRecommend/Ranking';
import RankMap from './pages/rankMap/RankMap';
import CheckThought from './pages/checkThought/CheckThought';
import Holiday from './pages/holiday/Holiday';

// 필터 데이터를 가져오는 함수 생성
const fetchFilterData = async () => {
  const response = await axios.get('/api/filter-data');
  return response.data;
};

// QueryClient 인스턴스 생성 및 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5분
    },
  },
});


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

// const TopNav = ({ isMobile }) => {
//   const navigate = useNavigate();

//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
//           <PersonSearch sx={{ mr: 1 }} />사장님 구해요
//         </Typography>
//         {!isMobile && (
//           <>
//             <Button color="inherit" onClick={() => navigate('/')}>{<HomeIcon sx={{ mr: 1 }} />}홈</Button>
//             <Button color="inherit" onClick={() => navigate('/recommend')}>{<Recommend sx={{ mr: 1 }} />}AI 맞춤 추천</Button>
//             <Button color="inherit" onClick={() => navigate('/rank')}>{<Map sx={{ mr: 1 }} />}랭킹 in 지도</Button>
//             <Button color="inherit" onClick={() => navigate('/check')}>{<CheckCircle sx={{ mr: 1 }} />}확인하기</Button>
//             <Button color="inherit" onClick={() => navigate('/holiday')}>{<BeachAccess sx={{ mr: 1 }} />}휴일추천</Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// 하단 네비게이션 컴포넌트
// const BottomNav = () => {
//   const navigate = useNavigate();
//   const [value, setValue] = useState('/');

//   useEffect(() => {
//     navigate(value);
//   }, [value]);

//   return (
//     <BottomNavigation
//       value={value}
//       onChange={(event, newValue) => setValue(newValue)}
//       showLabels
//       sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1201 }}
//     >
//       <BottomNavigationAction label="AI 맞춤 추천" value="/recommend" icon={<Recommend />} />
//       <BottomNavigationAction label="랭킹 in 지도" value="/rank" icon={<Map />} />
//       <BottomNavigationAction label="홈" value="/" icon={<HomeIcon />} />
//       <BottomNavigationAction label="확인하기" value="/check" icon={<CheckCircle />} />
//       <BottomNavigationAction label="휴일추천" value="/holiday" icon={<BeachAccess />} />
//     </BottomNavigation>
//   );
// };

// 홈 컴포넌트
const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const contents = [
    { id: 1, title: ['어디에 어떤 업종?', 'AI 맞춤 추천'], path: '/recommend' },
    { id: 2, title: ['지도로 한눈에 확인', '랭킹 IN 지도'], path: '/rank' },
    { id: 3, title: ['내 생각이 맞을까?', '확인하기'], path: '/check' },
    { id: 4, title: ['휴일 추천해요', '휴일 추천'], path: '/holiday' },
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  useEffect(() => {
    // 앱 시작 시 필터 데이터 프리페칭
    queryClient.prefetchQuery('filterData', fetchFilterData);
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <TopNav isMobile={isMobile} />
            <Box sx={{ pb: isMobile ? 7 : 0 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/content1" element={<Content1 />} />
                <Route path="/content2" element={<Content2 />} />
                <Route path="/content3" element={<Content3 />} />
                <Route path="/content4" element={<Content4 />} /> */}

                <Route path="/recommend" element={<AiRecommend />} />
                <Route path="/recommend/ranking" element={<Ranking />} />
                {/* <Route path="/recommend/detail" element={<Detail />} /> */}
                <Route path="/rank" element={<RankMap />} />
                <Route path="/check" element={<CheckThought />} />
                <Route path="/holiday" element={<Holiday />} />

              </Routes>
            </Box>
            {isMobile && <BottomNav />}
            <NicknameInputDialog />
          </Router>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;