import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Paper, Button, Fade, Snackbar, IconButton } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import BusinessTypeFilter from '../../components/BusinessTypeFilter';
import CustomMapMarker from '../../components/CustomMapMarker';
import axios from 'axios';
import { setFilter, selectFilter } from '../../redux/modules/filter';

const predefinedColors = ["#FFB399", "#99FFB3", "#99C2FF", "#FF99EE", "#99FFED"];

// const mockTopCommercialAreas = {
//   "편의점": [
//     { commercial_area_code: "1110001", commercial_area_name: "신촌역", latitude: 37.555994, longitude: 126.936958, district_name: "서대문구", rank: 1 },
//     { commercial_area_code: "1110002", commercial_area_name: "홍대", latitude: 37.557527, longitude: 126.924191, district_name: "마포구", rank: 2 },
//   ],
//   "화장품": [
//     { commercial_area_code: "1110003", commercial_area_name: "강남역", latitude: 37.498095, longitude: 127.027610, district_name: "강남구", rank: 1 },
//     { commercial_area_code: "1110004", commercial_area_name: "명동", latitude: 37.563692, longitude: 126.983238, district_name: "중구", rank: 2 },
//   ],
//   "핸드폰": [
//     { commercial_area_code: "1110005", commercial_area_name: "여의도", latitude: 37.521564, longitude: 126.924191, district_name: "영등포구", rank: 1 },
//     { commercial_area_code: "1110006", commercial_area_name: "압구정", latitude: 37.527072, longitude: 127.028461, district_name: "강남구", rank: 2 },
//   ],
//   "노래방": [
//     { commercial_area_code: "1110007", commercial_area_name: "가로수길", latitude: 37.520876, longitude: 127.023593, district_name: "강남구", rank: 1 },
//     { commercial_area_code: "1110008", commercial_area_name: "이태원", latitude: 37.534511, longitude: 126.994078, district_name: "용산구", rank: 2 },
//   ],
//   "미용실": [
//     { commercial_area_code: "1110009", commercial_area_name: "삼청동", latitude: 37.582336, longitude: 126.981431, district_name: "종로구", rank: 1 },
//     { commercial_area_code: "1110010", commercial_area_name: "서래마을", latitude: 37.499571, longitude: 126.994609, district_name: "서초구", rank: 2 },
//   ],
// };

const RankMap = () => {
  const dispatch = useDispatch(); // 추가
  const filter = useSelector(selectFilter); // 추가
  
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [businessTypeData, setBusinessTypeData] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [topCommercialAreas, setTopCommercialAreas] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const abortControllerRef = useRef(null);
  const [loadingRequests, setLoadingRequests] = useState(new Set());
  const requestIdRef = useRef(0);
  
//빠용 


const initializeMap = useCallback(() => {
  if (window.naver && window.naver.maps) {
    const newMap = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(37.5665, 126.9780),
      zoom: 11
    });
    setMap(newMap);
  } else {
    console.error('Naver Maps API is not loaded');
  }
}, []);


useEffect(() => {
  initializeMap();

  const savedNickname = localStorage.getItem('nickname');
  if (savedNickname) {
    setNickname(savedNickname);
  }
}, []);

  

  useEffect(() => {
    if (map) {
      clearAllMarkers();
      if (filter.selectedBusinessTypes.length > 0) {
        fetchTopCommercialAreas();
      }
    }
  }, [map, filter.selectedBusinessTypes]);

  const clearAllMarkers = useCallback(() => {
    markers.forEach(marker => marker.setMap(null));
    setMarkers([]);
    setTopCommercialAreas({});
  }, [markers]);

  const fetchTopCommercialAreas = async () => {
    const requestId = ++requestIdRef.current;
    setLoadingRequests(prev => new Set(prev).add(requestId));
    setSnackbarOpen(true);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.post('/api/rankmap', {
        selectedBusinessTypes: filter.selectedBusinessTypes.map(type => type.name),
        userId: userId ? parseInt(userId) : null
      }, { signal: abortControllerRef.current.signal });
      setTopCommercialAreas(response.data);
      updateMarkers(response.data);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Request aborted');
      } else {
        console.error('Error fetching top commercial areas:', error);
      }
    } finally {
      setLoadingRequests(prev => {
        const newSet = new Set(prev);
        newSet.delete(requestId);
        return newSet;
      });
      if (loadingRequests.size === 0) {
        setSnackbarOpen(false);
      }
    }
  };

  // const handleBusinessTypeDataFetched = useCallback((data) => {
  //   setBusinessTypeData(data);
  // }, []);
  
  const handleBusinessTypeDataFetched = (data) => {
    setBusinessTypeData(data);
  };

  const handleBusinessTypeSelect = useCallback((selected) => {
    if (selected.length <= 5) {
      console.log('선택된 업종:', selected);
      setSelectedBusinessTypes(selected);
    } else {
      console.log('최대 5개의 업종만 선택할 수 있습니다.');
    }
  }, []);

  const updateMarkers = useCallback((areas) => {
    if (!map || !window.naver) return;
  
    clearAllMarkers();
  
    const newMarkers = [];
    const viewportWidth = window.innerWidth;
  
    Object.entries(areas).forEach(([businessTypeName, areaList], index) => {
      const color = predefinedColors[index % predefinedColors.length];
  
      areaList.forEach(area => {
        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(area.latitude, area.longitude),
          map: map,
          icon: {
            content: CustomMapMarker({ title1: area.commercial_area_name, rank: area.rank, title2: businessTypeName, windowWidth: viewportWidth, color: color }),
            anchor: new window.naver.maps.Point(7, 5)
          },
          title: `${area.commercial_area_name} (${businessTypeName} ${area.rank}위)`
        });
  
        newMarkers.push(marker);
  
        const infoWindow = new window.naver.maps.InfoWindow({
          content: `
            <div style="padding:10px; border-radius: 10px; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); position: relative; cursor: pointer;">
              <strong>${area.commercial_area_name}</strong><br>
              ${businessTypeName} ${area.rank}위
            </div>`,
          borderColor: 'transparent',
          borderWidth: 1,
          backgroundColor: 'transparent',
          anchorSize: new window.naver.maps.Size(12, 12),
          anchorSkew: true,
          anchorColor: 'white',
          pixelOffset: new window.naver.maps.Point(0, -5)
        });
  
        window.naver.maps.Event.addListener(marker, 'click', () => {
          if (infoWindow.getMap()) {
            infoWindow.close();
          } else {
            infoWindow.open(map, marker);
          }
        });
  
        // InfoWindow 클릭 시 닫기
        window.naver.maps.Event.addListener(infoWindow, 'click', () => {
          infoWindow.close();
        });
      });
    });
  
    setMarkers(newMarkers);
  }, [map, clearAllMarkers]);


  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ position: 'relative', height: '94vh' }}>
      <Typography variant="h4" gutterBottom>랭킹 in 지도</Typography>
      <Button
        variant="contained"
        onClick={toggleFilter}
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 11,
        }}
      >
        <FilterListIcon sx={{ mr: 1 }} />
        {isFilterOpen ? '필터 닫기' : '필터 열기'}
      </Button>
      <Fade in={isFilterOpen}>
        <Box
          sx={{
            position: 'absolute',
            top: 70,
            left: 16,
            zIndex: 10,
            width: { xs: 'calc(100% - 32px)', sm: '400px' },
            display: isFilterOpen ? 'block' : 'none',
          }}
        >
          <Paper elevation={3} sx={{ p: 2 }}>
            <BusinessTypeFilter
              onDataFetched={handleBusinessTypeDataFetched}
              initialData={businessTypeData}
              singleSelect={false}
              maxSelect={5}
              mobileResponsive={true}
              selectedTypes={filter.selectedBusinessTypes}
              onSelect={(selected) => dispatch(setFilter({ selectedBusinessTypes: selected }))}
            />
          </Paper>
        </Box>
      </Fade>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={loadingRequests.size > 0}
        autoHideDuration={null}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="info"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          데이터를 불러오고 있습니다...
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default RankMap;