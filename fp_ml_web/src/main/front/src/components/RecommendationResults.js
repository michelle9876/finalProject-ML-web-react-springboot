import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { Container, Paper, Typography, Grid, CircularProgress, Box } from '@mui/material';

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
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>추천 결과</Typography>
        <Grid container spacing={3}>
          {predictions.map((prediction, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">{prediction.ranking}. {prediction.businessDistrict} - {prediction.serviceType}</Typography>
                <Typography>예상 매출: {prediction.predictedSales.toLocaleString()} 원</Typography>
                <Typography>임대료: {prediction.rent.toLocaleString()} 원/m²</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        )}
        {hasMore && <div ref={ref} style={{ height: '10px' }} />}
        {!hasMore && <Typography sx={{ textAlign: 'center', mt: 2 }}>모든 결과를 불러왔습니다.</Typography>}
      </Paper>
    </Container>
  );
};

export default RecommendationResults;