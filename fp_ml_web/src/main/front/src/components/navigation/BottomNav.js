import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home as HomeIcon, Recommend, Map, CheckCircle, BeachAccess } from '@mui/icons-material';

const BottomNav = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('/');

  useEffect(() => {
    navigate(value);
  }, [value, navigate]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        zIndex: 1201,
        backgroundColor: 'white',
        '& .MuiBottomNavigationAction-root': {
          color: 'rgba(0, 0, 0, 0.54)',
        },
        '& .Mui-selected': {
          color: 'black',
        },
      }}
    >
      <BottomNavigationAction label="AI 맞춤 추천" value="/recommend" icon={<Recommend />} />
      <BottomNavigationAction label="랭킹 in 지도" value="/rank" icon={<Map />} />
      <BottomNavigationAction label="홈" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="확인하기" value="/check" icon={<CheckCircle />} />
      <BottomNavigationAction label="휴일추천" value="/holiday" icon={<BeachAccess />} />
    </BottomNavigation>
  );
};

export default BottomNav;