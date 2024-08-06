import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './redux/configureStore';
import { ReactQueryDevtools } from 'react-query/devtools';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import {
  ThemeProvider, createTheme, CssBaseline, Box, useMediaQuery
} from '@mui/material';

import TopNav from './components/navigation/TopNav';
import BottomNav from './components/navigation/BottomNav';
import NicknameInputDialog from './components/NicknameInputDialog';
import './index.css';
import './App.css';
import Home from './pages/home/Home';
import AiRecommend from './pages/aiRecommend/AiRecommend';
import Ranking from './pages/aiRecommend/Ranking';
import RankMap from './pages/rankMap/RankMap';
import CheckThought from './pages/checkThought/CheckThought';
import Holiday from './pages/holiday/Holiday';

// // 필터 데이터를 가져오는 함수 생성
// const fetchFilterData = async () => {
//   const response = await axios.get('/api/filter-data');
//   return response.data;
// };

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
// 커스텀 테마 생성
const theme = createTheme({
  typography: {
    fontFamily: 'GmarketSans, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: '#2e2e48',
    },
    secondary: {
      main: '#79819a',
    },
    accent: {
      main: '#47516b',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          font-family: 'GmarketSans', sans-serif;
        }
      `,
    },
  },
});

// 메인 App 컴포넌트
const App = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // useEffect(() => {
  //   // 앱 시작 시 필터 데이터 프리페칭
  //   queryClient.prefetchQuery('filterData', fetchFilterData);
  // }, []);

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
                <Route path="/recommend" element={<AiRecommend />} />
                <Route path="/recommend/ranking" element={<Ranking />} />
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