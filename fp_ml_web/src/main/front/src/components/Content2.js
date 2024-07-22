import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import BusinessTypeFilter from './BusinessTypeFilter';
import axios from 'axios';

// 미리 정의된 색상 배열
const predefinedColors = ["#FF5733", "#33FF57", "#3357FF", "#FF33E9", "#33FFF6"];

// 목업 데이터
const mockBusinessTypes = [
  { id: "51", name: "편의점", category: "소매" },
  { id: "53", name: "화장품", category: "미용" },
  { id: "52", name: "핸드폰", category: "소매" },
  { id: "21", name: "노래방", category: "음식" },
  { id: "57", name: "미용실", category: "음식" },
  { id: "61", name: "서점", category: "소매" },
  { id: "63", name: "약국", category: "건강" },
];

const mockTopCommercialAreas = {
  "편의점": [
    { commercial_area_code: "1110001", commercial_area_name: "신촌역", latitude: 37.555994, longitude: 126.936958, district_name: "서대문구", rank: 1 },
    { commercial_area_code: "1110002", commercial_area_name: "홍대", latitude: 37.557527, longitude: 126.924191, district_name: "마포구", rank: 2 },
  ],
  "화장품": [
    { commercial_area_code: "1110003", commercial_area_name: "강남역", latitude: 37.498095, longitude: 127.027610, district_name: "강남구", rank: 1 },
    { commercial_area_code: "1110004", commercial_area_name: "명동", latitude: 37.563692, longitude: 126.983238, district_name: "중구", rank: 2 },
  ],
  "핸드폰": [
    { commercial_area_code: "1110005", commercial_area_name: "여의도", latitude: 37.521564, longitude: 126.924191, district_name: "영등포구", rank: 1 },
    { commercial_area_code: "1110006", commercial_area_name: "압구정", latitude: 37.527072, longitude: 127.028461, district_name: "강남구", rank: 2 },
  ],
  "노래방": [
    { commercial_area_code: "1110007", commercial_area_name: "가로수길", latitude: 37.520876, longitude: 127.023593, district_name: "강남구", rank: 1 },
    { commercial_area_code: "1110008", commercial_area_name: "이태원", latitude: 37.534511, longitude: 126.994078, district_name: "용산구", rank: 2 },
  ],
  "미용실": [
    { commercial_area_code: "1110009", commercial_area_name: "삼청동", latitude: 37.582336, longitude: 126.981431, district_name: "종로구", rank: 1 },
    { commercial_area_code: "1110010", commercial_area_name: "서래마을", latitude: 37.499571, longitude: 126.994609, district_name: "서초구", rank: 2 },
  ],
};

const Content2 = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [businessTypeData, setBusinessTypeData] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=88cu8ieiwt`;
    script.async = true;
    script.onload = () => initializeMap();
    document.head.appendChild(script);

    const uniqueCategories = [...new Set(mockBusinessTypes.map(item => item.category))];
    setCategories(uniqueCategories.map(name => ({ name })));

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initializeMap = useCallback(() => {
    if (!window.naver) return;
    const newMap = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(37.5665, 126.9780),
      zoom: 11
    });
    setMap(newMap);
  }, []);

  useEffect(() => {
    if (map && selectedBusinessTypes.length > 0) {
      updateMarkers();
    }
  }, [map, selectedBusinessTypes]);

  const handleBusinessTypeDataFetched = useCallback((data) => {
    setBusinessTypeData(data);
  }, []);

  const handleBusinessTypeSelect = useCallback((selected) => {
    if (selected.length <= 5) {
      console.log('선택된 업종:', selected);
      setSelectedBusinessTypes(selected);
    } else {
      console.log('최대 5개의 업종만 선택할 수 있습니다.');
    }
  }, []);

  const updateMarkers = useCallback(() => {
    if (!map || !window.naver) return;

    // 기존 마커 제거
    markers.forEach(marker => marker.setMap(null));

    const newMarkers = [];
    selectedBusinessTypes.forEach((businessType, index) => {
      const areas = mockTopCommercialAreas[businessType.name];
      const color = predefinedColors[index % predefinedColors.length];
      
     if (areas) {
        areas.forEach((area, areaIndex) => {
          const markerColor = predefinedColors[area.rank % predefinedColors.length];
          const marker = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(area.latitude, area.longitude),
            map: map,
            icon: {
              content: `<div style="background-color:${markerColor};color:white;border-radius:50%;width:30px;height:30px;line-height:30px;text-align:center;font-weight:bold;">${area.rank}</div>`,
              anchor: new window.naver.maps.Point(15, 15)
            },
            title: `${area.commercial_area_name} (${businessType.name} ${area.rank}위)`
          });

          newMarkers.push(marker);

          window.naver.maps.Event.addListener(marker, 'click', () => {
            const infoWindow = new window.naver.maps.InfoWindow({
              content: `
                <div style="padding:10px; border-radius: 12px; background-color: white; border: 1px solid #ddd;">
                  <strong>${area.commercial_area_name}</strong><br>
                  ${businessType.name} ${area.rank}위
                </div>`
            });
            infoWindow.open(map, marker);
          });
        });
      }
    });
    setMarkers(newMarkers);
  }, [map, selectedBusinessTypes]);

  return (
    <Box sx={{ position: 'relative', height: '94vh' }}>
      <Typography variant="h4" gutterBottom>랭킹 in 지도</Typography>
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 10,
          width: '400px',
        }}
      >
        <Paper elevation={3} sx={{ p: 2 }}>
          <BusinessTypeFilter
            onSelect={handleBusinessTypeSelect}
            onDataFetched={handleBusinessTypeDataFetched}
            initialData={businessTypeData}
            singleSelect={false}
            maxSelect={5}
          />
        </Paper>
      </Box>
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
    </Box>
  );
};

export default Content2;