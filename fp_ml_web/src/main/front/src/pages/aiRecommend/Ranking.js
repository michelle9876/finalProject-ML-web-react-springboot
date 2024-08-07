import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useInfiniteQuery } from 'react-query';
import { Container, Paper, Typography, Table, TableBody, TableContainer, Box, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import TableHeader from '../../components/table/TableHeader';
import TableRowContent from '../../components/table/TableRowContent';
import DetailModal from '../../components/DetailModal';
import { selectFilter } from '../../redux/modules/filter';
import { fetchPredictions, fetchIndustryCorrelations, fetchRecentFactors } from '../../services/api';
import { transformFilterData } from '../../utils/filterUtils';

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
        <img src="/img/double_quotes_icon.png" alt="quotes" className="w-3 h-3 mr-1" />
        <Typography variant="subtitle1" className="text-[#47516b]">
          {nickname ? `${nickname}님` : '악명님'}을 위한 맞춤 추천랭킹
        </Typography>
        <img src="/img/down_arrow_icon.png" alt="arrow" className="w-3 하-3 ml-1" />
      </div>
    </div>
  );
};

const Ranking = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const filter = useSelector(selectFilter);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [correlations, setCorrelations] = useState([]);
  const [recentFactors, setRecentFactors] = useState({});

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ['predictions', transformFilterData(filter)],
    ({ pageParam = 0 }) => fetchPredictions({ pageParam, queryKey: [null, transformFilterData(filter)] }),
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.last ? undefined : pages.length;
      },
    }
  );

  const handleItemClick = async (item) => {
    setSelectedItem(item);
    try {
      // 1. 먼저 fetchIndustryCorrelations 호출
      const correlationsData = await fetchIndustryCorrelations(item.serviceType);
      setCorrelations(correlationsData.correlations);

      // 2. correlationsData를 사용하여 fetchRecentFactors 호출
      const topFiveFactors = correlationsData.correlations.slice(0, 5).map(c => c.factorKor);
      const recentFactorsData = await fetchRecentFactors(item.businessDistrict, item.serviceType, topFiveFactors);
      setRecentFactors(recentFactorsData);

    } catch (error) {
      console.error("Error fetching data:", error);
      // 에러 처리 로직 추가
    }
    setIsModalOpen(true);
  };
  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.offsetHeight;
    const scrollThreshold = 0.7; // 70% 스크롤 시 다음 페이지 로드

    if (scrollPosition / pageHeight > scrollThreshold && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper>
        <RecommendationHeader />
        <TableContainer>
          <Table sx={{ tableLayout: 'fixed' }}>
            <TableHeader isMobile={isMobile} />
            <TableBody>
              {status === 'loading' ? (
                <tr>
                  <td colSpan={isMobile ? 3 : 5}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                      <CircularProgress />
                    </Box>
                  </td>
                </tr>
              ) : status === 'error' ? (
                <tr>
                  <td colSpan={isMobile ? 3 : 5}>
                    <Typography sx={{ textAlign: 'center', my: 4 }}>데이터를 불러오는 중 오류가 발생했습니다.</Typography>
                  </td>
                </tr>
              ) : (
                data.pages.map((page, i) => (
                  <React.Fragment key={i}>
                    {page.content.map((prediction, index) => (
                      <TableRowContent 
                        key={index} 
                        data={prediction} 
                        isMobile={isMobile} 
                        onClick={() => handleItemClick(prediction)}
                      />
                    ))}
                  </React.Fragment>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {isFetchingNextPage && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
            <CircularProgress size={24} />
          </Box>
        )}
        {!hasNextPage && status === 'success' && (
          <Typography sx={{ textAlign: 'center', mt: 2, mb: 2 }}>모든 결과를 불러왔습니다.</Typography>
        )}
      </Paper>

      <DetailModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedItem}
        correlations={correlations}
        recentFactors={recentFactors}
      />
    </Container>
  );
};

export default Ranking;