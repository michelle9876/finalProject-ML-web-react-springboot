import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, CircularProgress, Box, useMediaQuery, useTheme } from '@mui/material';

const RecommendationHeader = () => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  return (
    <div className="bg-[#f7f9fc] p-4 rounded-t-lg">
      <Typography variant="h5" className="font-bold text-[#2e2e48] mb-2">AI맞춤추천</Typography>
      <div className="flex items-center justify-center">
        <img src="img/double_quotes_icon.png" alt="quotes" className="w-3 h-3 mr-1" />
        <Typography variant="subtitle1" className="text-[#47516b]">
          {nickname ? `${nickname}님` : '악명님'}을 위한 맞춤 추천랭킹
        </Typography>
        <img src="img/down_arrow_icon.png" alt="arrow" className="w-3 h-3 ml-1" />
      </div>
    </div>
  );
}

const getRentLabel = (rent) => {
  if (rent >= 50) return "상";
  if (rent >= 37) return "중";
  return "하";
}

const getRentLabelColor = (label) => {
  switch(label) {
    case "상": return "error";
    case "중": return "warning";
    case "하": return "success";
    default: return "default";
  }
}

const RentLevelChip = ({ rent, isMobile }) => {
  const theme = useTheme();
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));
  const label = getRentLabel(rent);
  const color = getRentLabelColor(label);
  const rentInTenThousand = (rent / 10).toFixed(1);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Chip 
        label={label} 
        color={color}
        size={isMobile ? "small" : "medium"}
      />
      <Typography 
        variant={isMobile ? (isVerySmall ? 'caption' : 'body2') : 'body1'} 
        sx={{ mt: 0.5, fontSize: isMobile ? (isVerySmall ? '0.6rem' : '0.7rem') : 'inherit' }}
      >
        평균 {rentInTenThousand}만원/㎡
      </Typography>
    </Box>
  );
};

const TableHeader = ({ isMobile }) => {
  const theme = useTheme();
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  const headers = isMobile 
    ? [
        { label: '순위', width: '15%' },
        { label: '상권/업종', width: '40%' },
        { label: '예상 매출액', width: '25%' },
        { label: '임대료 수준', width: '20%' }
      ]
    : [
        { label: '순위', width: '10%' },
        { label: '상권', width: '25%' },
        { label: '업종', width: '25%' },
        { label: '예상 매출액', width: '20%' },
        { label: '임대료 수준', width: '20%' }
      ];

  return (
    <TableHead>
      <TableRow>
        {headers.map((header, index) => (
          <TableCell 
            key={index}
            align="center"
            sx={{ 
              width: header.width,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              padding: isMobile ? '8px 4px' : '16px',
            }}
          >
            <Typography
              variant={isMobile ? (isVerySmall ? 'caption' : 'body2') : 'body1'}
              component="div"
              sx={{
                fontWeight: 'bold',
                fontSize: isMobile ? (isVerySmall ? '0.65rem' : '0.75rem') : 'inherit',
              }}
            >
              {header.label}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const LocationIcon = () => (
  <img 
    src="basic/location304_12566.png" 
    alt="위치 아이콘" 
    style={{ 
      width: '16px', 
      height: '16px', 
      marginRight: '2px',
      marginTop: '2px',
      verticalAlign: 'middle'
    }} 
  />
);

const TableRowContent = ({ data, isMobile }) => {
  const theme = useTheme();
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));
  const salesInTenThousand = Math.round(data.predictedSales / 10000).toLocaleString();

  return (
    <TableRow>
      <TableCell align="center" sx={{ width: isMobile ? '15%' : '10%', padding: isMobile ? '8px 4px' : '16px' }}>
        <Typography variant={isMobile ? (isVerySmall ? 'caption' : 'body2') : 'body1'}>
          {data.ranking}위
        </Typography>
      </TableCell>
      {!isMobile && (
        <TableCell align="center" sx={{ width: '25%' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <LocationIcon />
          <Typography variant="body1">{data.businessDistrict}</Typography>
        </Box>
      </TableCell>
      )}
      <TableCell align="center" sx={{ width: isMobile ? '40%' : '25%', padding: isMobile ? '8px 4px' : '16px' }}>
        {isMobile ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
              <LocationIcon />
              <Typography variant={isVerySmall ? 'caption' : 'body2'} align="left">
                {data.businessDistrict}
              </Typography>
            </Box>
            <Typography variant={isVerySmall ? 'caption' : 'body2'} align="left">
              {data.serviceType}
            </Typography>
          </Box>
        ) : (
          <Typography variant="body1">{data.serviceType}</Typography>
        )}
      </TableCell>
      <TableCell align="center" sx={{ width: isMobile ? '25%' : '20%', padding: isMobile ? '8px 4px' : '16px' }}>
        <Typography variant={isMobile ? (isVerySmall ? 'caption' : 'body2') : 'body1'}>
          {salesInTenThousand}만원
        </Typography>
      </TableCell>
      <TableCell align="center" sx={{ width: '20%', padding: isMobile ? '8px 4px' : '16px' }}>
        <RentLevelChip rent={data.rent} isMobile={isMobile} />
      </TableCell>
    </TableRow>
  );
};

const RecommendationResults = ({ filterData }) => {
  const [predictions, setPredictions] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef(false);
  const lastScrollTop = useRef(0);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '200px 0px',
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 필터 데이터 삭제
    return () => {
      sessionStorage.removeItem('filterData');
    };
  }, []);

  const fetchPredictions = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;
    loadingRef.current = true;
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:8080/api/predictions?page=${page}&size=10`, filterData);
      const { content, last } = response.data;
      
      if (content.length === 0) {
        setHasMore(false);
      } else {
        setPredictions(prev => [...prev, ...content]);
        setPage(prev => prev + 1);
        setHasMore(!last);
      }
    } catch (error) {
      console.error('Error fetching predictions:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, [filterData, page, hasMore]);

  useEffect(() => {
    setPredictions([]);
    setPage(0);
    setHasMore(true);
    loadingRef.current = false;
    lastScrollTop.current = 0;
    fetchPredictions();
  }, [filterData]);

  useEffect(() => {
    if (inView) {
      fetchPredictions();
    }
  }, [inView, fetchPredictions]);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        // 스크롤 다운
        if (!loading && hasMore && predictions.length > 0) {
          fetchPredictions();
        }
      }
      lastScrollTop.current = st <= 0 ? 0 : st; // iOS 바운스 효과 대응
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, predictions, fetchPredictions]);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper>
        <RecommendationHeader />
        <TableContainer>
          <Table sx={{ tableLayout: 'fixed' }}>
            <TableHeader isMobile={isMobile} />
            <TableBody>
              {predictions.map((prediction, index) => (
                <TableRowContent key={index} data={prediction} isMobile={isMobile} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
            <CircularProgress />
          </Box>
        )}
        {hasMore && <div ref={ref} style={{ height: '10px' }} />}
        {!hasMore && <Typography sx={{ textAlign: 'center', mt: 2, mb: 2 }}>모든 결과를 불러왔습니다.</Typography>}
      </Paper>
    </Container>
  );
};

export default RecommendationResults;