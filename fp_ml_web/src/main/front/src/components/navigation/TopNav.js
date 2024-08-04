import {
  AppBar, Toolbar, Typography, Button 
} from '@mui/material';
import { Home as HomeIcon, Recommend, Map, CheckCircle, BeachAccess, PersonSearch } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TopNav = ({ isMobile }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            cursor: 'pointer', 
            color: 'black' 
          }} 
          onClick={() => navigate('/')}
        >
          <PersonSearch sx={{ mr: 1, color: 'black' }} />사장님 구해요
        </Typography>
        {!isMobile && (
          <>
            <Button sx={{ color: 'black' }} onClick={() => navigate('/')}>{<HomeIcon sx={{ mr: 1 }} />}홈</Button>
            <Button sx={{ color: 'black' }} onClick={() => navigate('/recommend')}>{<Recommend sx={{ mr: 1 }} />}AI 맞춤 추천</Button>
            <Button sx={{ color: 'black' }} onClick={() => navigate('/rank')}>{<Map sx={{ mr: 1 }} />}랭킹 in 지도</Button>
            <Button sx={{ color: 'black' }} onClick={() => navigate('/check')}>{<CheckCircle sx={{ mr: 1 }} />}확인하기</Button>
            <Button sx={{ color: 'black' }} onClick={() => navigate('/holiday')}>{<BeachAccess sx={{ mr: 1 }} />}휴일추천</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;