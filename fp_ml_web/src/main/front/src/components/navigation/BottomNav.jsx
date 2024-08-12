import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home as HomeIcon, Recommend, Map, CheckCircle, BeachAccess } from '@mui/icons-material';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('/');

  useEffect(() => {
    const path = '/' + location.pathname.split('/')[1]; // 메인 경로만 추출
    setValue(path);
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        zIndex: 1201,
        backgroundColor: 'white',
        height: '70px',
        display: { xs: 'flex', md: 'none' },
        '& .MuiBottomNavigationAction-root': {
          color: 'rgba(0, 0, 0, 0.54)',
          minWidth: 'auto',
          padding: '6px 12px 4px',
        },
        '& .Mui-selected': {
          color: '#3f51b5', // 또는 원하는 색상으로 변경
          fontSize: '0.75rem',
        },
        '& .MuiBottomNavigationAction-label': {
          fontSize: '0.75rem',
        },
        '& .MuiBottomNavigationAction-label.Mui-selected': {
          fontSize: '0.75rem',
        },
      }}
    >
      <BottomNavigationAction label="AI맞춤추천" value="/recommend" icon={<Recommend />} />
      <BottomNavigationAction label="랭킹in지도" value="/rank" icon={<Map />} />
      <BottomNavigationAction label="홈" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="확인하기" value="/check" icon={<CheckCircle />} />
      <BottomNavigationAction label="휴일추천" value="/holiday" icon={<BeachAccess />} />
    </BottomNavigation>
  );
};

export default BottomNav;