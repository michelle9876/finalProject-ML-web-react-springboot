import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, Paper,
  ThemeProvider, createTheme, CssBaseline
} from '@mui/material';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';
import MapComponent from './components/MapComponent';

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

// 네비게이션 컴포넌트
const Navigation = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          사장님 구해요
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>홈</Button>
        <Button color="inherit" onClick={() => navigate('/content1')}>AI맞춤추천</Button>
        <Button color="inherit" onClick={() => navigate('/content2')}>랭킹 in 지도</Button>
        <Button color="inherit" onClick={() => navigate('/content3')}>확인하기</Button>
        <Button color="inherit" onClick={() => navigate('/content4')}>휴일추천</Button>
      </Toolbar>
    </AppBar>
  );
};

// 홈 컴포넌트
const Home = () => {
  const navigate = useNavigate();
  const contents = [
    { id: 1, title: ['어디에 어떤 업종?', 'AI맞춤추천'], path: '/content1' },
    { id: 2, title: ['지도로 한눈에 확인', '랭킹 in 지도'], path: '/content2' },
    { id: 3, title: ['내 생각이 맞을까?', '확인하기'], path: '/content3' },
    { id: 4, title: ['휴일 추천해요', '휴일추천'], path: '/content4' },
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
              onClick={() => navigate(item.path)}
              sx={{ 
                height: '100px',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                },
              }}
            >
              {item.title.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < item.title.length - 1 && <br />}
                </React.Fragment>
              ))}
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

  useEffect(() => {
    axios.get('/api/data')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content1" element={<Content1 />} />
          <Route path="/content2" element={<Content2 />} />
          <Route path="/content3" element={<Content3 />} />
          <Route path="/content4" element={<Content4 />} />
        </Routes>
        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          받아온 값: {data}
        </Typography>
      </Router>
    </ThemeProvider>
  );
};

export default App;