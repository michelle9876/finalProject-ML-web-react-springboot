import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, CircularProgress, Box, useMediaQuery, useTheme } from '@mui/material';
import TableHeader from './components/TableHeader';
import TableRowContent from './components/TableRowContent';


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

const Ranking = ({ filterData }) => {
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

export default Ranking;