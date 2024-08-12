import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

// 미리 계산된 좌표를 포함한 목업 데이터
const mockCommercialAreasData = [
  {
    "상권_구분_코드": "C",
    "상권_구분_코드_명": "골목상권",
    "상권_코드": "3110008",
    "상권_코드_명": "배화여자대학교(박노수미술관)",
    "latitude": 37.57964234,
    "longitude": 126.96853628,
    "자치구_코드": "11110",
    "자치구_코드_명": "종로구",
    "행정동_코드": "11110515",
    "행정동_코드_명": "청운효자동",
    "영역_면적": "149264"
  },
  {
    "상권_구분_코드": "A",
    "상권_구분_코드_명": "골목상권",
    "상권_코드": "3110009",
    "상권_코드_명": "자하문터널",
    "latitude": 37.59419574,
    "longitude": 126.96754346,
    "자치구_코드": "11110",
    "자치구_코드_명": "종로구",
    "행정동_코드": "11110550",
    "행정동_코드_명": "부암동",
    "영역_면적": "178306"
  },
  {
    "상권_구분_코드": "A",
    "상권_구분_코드_명": "골목상권",
    "상권_코드": "3110010",
    "상권_코드_명": "평창동서측",
    "latitude": 37.60826162,
    "longitude": 126.96825228,
    "자치구_코드": "11110",
    "자치구_코드_명": "종로구",
    "행정동_코드": "11110560",
    "행정동_코드_명": "평창동",
    "영역_면적": "369415"
  },
  {
    "상권_구분_코드": "A",
    "상권_구분_코드_명": "골목상권",
    "상권_코드": "3110017",
    "상권_코드_명": "정독도서관",
    "latitude": 37.58295064,
    "longitude": 126.98288851,
    "자치구_코드": "11110",
    "자치구_코드_명": "종로구",
    "행정동_코드": "11110600",
    "행정동_코드_명": "가회동",
    "영역_면적": "83855"
  },
  {
    "상권_구분_코드": "A",
    "상권_구분_코드_명": "골목상권",
    "상권_코드": "3110018",
    "상권_코드_명": "중앙고등학교",
    "latitude": 37.58211868,
    "longitude": 126.98584839,
    "자치구_코드": "11110",
    "자치구_코드_명": "종로구",
    "행정동_코드": "11110600",
    "행정동_코드_명": "가회동",
    "영역_면적": "166872"
  }
];

const MapSelectionModal = ({ open, onClose, onSelect }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);

  useEffect(() => {
    if (!window.naver) {
      const script = document.createElement('script');
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=88cu8ieiwt`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else if (!map) {
      initializeMap();
    }
  }, [map]);

  const initializeMap = () => {
    if (!window.naver || !mapRef.current || map) return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(37.5665, 126.9780),
      zoom: 11,
    };
    const newMap = new window.naver.maps.Map(mapRef.current, mapOptions);
    setMap(newMap);
  };

  useEffect(() => {
    if (map && open) {
      createMarkers();
    }
  }, [map, open]);

  const createMarkers = () => {
    const newMarkers = mockCommercialAreasData.map(area => {
      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(area.latitude, area.longitude),
        map: map,
        title: area.상권_코드_명,
      });

      const infoWindow = new window.naver.maps.InfoWindow({
        content: `<div style="padding: 10px;">${area.상권_코드_명}</div>`,
      });

      window.naver.maps.Event.addListener(marker, 'click', () => {
        toggleAreaSelection(area);
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(map, marker);
        }
      });

      return marker;
    });

    setMarkers(newMarkers);
  };

  const toggleAreaSelection = (area) => {
    setSelectedAreas(prev => {
      const isSelected = prev.some(a => a.상권_코드 === area.상권_코드);
      if (isSelected) {
        return prev.filter(a => a.상권_코드 !== area.상권_코드);
      } else {
        return [...prev, area];
      }
    });
  };

  const handleSelectComplete = () => {
    onSelect(selectedAreas);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>지도로 상권 선택</DialogTitle>
      <DialogContent>
        <Box display="flex" height="500px">
          <Box flex={1} ref={mapRef} />
          <Box width="200px" ml={2} overflow="auto">
            <Typography variant="subtitle1" gutterBottom>선택된 상권:</Typography>
            {selectedAreas.map(area => (
              <Typography key={area.상권_코드} variant="body2">{area.상권_코드_명}</Typography>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={handleSelectComplete} variant="contained" color="primary">
          선택 완료
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MapSelectionModal;