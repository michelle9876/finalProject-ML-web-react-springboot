import React, { useState, useEffect, useCallback } from 'react';
import { Container, Paper, Typography, Grid, Button, TextField, MenuItem, Box, Collapse, Card, CardContent, CircularProgress  } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import BusinessTypeFilter from '../../components/BusinessTypeFilter';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { setFilter, selectFilter } from '../../redux/modules/filter';

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
};

const menuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

const CheckThought = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const [factors, setFactors] = useState([]);
  const [hypotheses, setHypotheses] = useState([
    { industry: '', factor: '', condition: '높으면', showFilter: false, errors: {} }
  ]);
  const [nickname, setNickname] = useState('');
  const [results, setResults] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [businessTypeData, setBusinessTypeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchFactors();
  }, []);

  useEffect(() => {
    if (hasSubmitted) {
      fetchResults();
    }
  }, [hypotheses, hasSubmitted]);

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  const fetchFactors = async () => {
    try {
      const response = await axios.get('/api/factors');
      setFactors(response.data);
    } catch (error) {
      console.error('Error fetching factors:', error);
    }
  };

  const fetchResults = async () => {
    setIsLoading(true);
    // 로딩이 시작되는 시점에 스크롤
    scrollToBottom();
    try {
      const validHypotheses = hypotheses.map(hypothesis => ({
        ...hypothesis,
        industry: hypothesis.industry || filter.selectedBusinessTypes[0]?.name
      })).filter(hypothesis =>
        hypothesis.industry && hypothesis.factor && hypothesis.condition
      );
  
      if (validHypotheses.length === 0) {
        setResults([]);
        return;
      }
  
      const promises = validHypotheses.map(hypothesis =>
        axios.post('/api/check-your-thoughts', hypothesis)
      );
      const apiResults = await Promise.all(promises);
  
      const formattedResults = apiResults.map(response => {
        if (response.data && response.data.length > 0) {
          return response.data;
        }
        return [];
      });
  
      setResults(formattedResults);
    } catch (error) {
      console.error('Error submitting hypotheses:', error);
    }
  };

  const menuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

  const handleBusinessTypeDataFetched = useCallback((data) => {
    setBusinessTypeData(data);
  }, []);

  const handleIndustrySelect = useCallback((selected, index) => {
    if (selected && selected.length > 0) {
      const selectedIndustry = selected[0].name;
      dispatch(setFilter({ selectedBusinessTypes: selected }));
      updateHypothesis(index, 'industry', selectedIndustry);
      updateErrors(index, 'industry', '');
      toggleBusinessTypeFilter(index);

      const updatedHypotheses = [...hypotheses];
      updatedHypotheses[index].industry = selectedIndustry;
      setHypotheses(updatedHypotheses);
    }
  }, [dispatch]);

  const handleFactorChange = (index, value) => {
    const updatedHypotheses = [...hypotheses];
    updatedHypotheses[index].factor = value;
    setHypotheses(updatedHypotheses);
    updateErrors(index, 'factor', '');
  };

  const handleConditionChange = (index, value) => {
    const updatedHypotheses = [...hypotheses];
    updatedHypotheses[index].condition = value;
    setHypotheses(updatedHypotheses);
    updateErrors(index, 'condition', '');
  };

  const updateErrors = (index, field, value) => {
    const updatedHypotheses = [...hypotheses];
    updatedHypotheses[index].errors[field] = value;
    setHypotheses(updatedHypotheses);
  };

  const updateHypothesis = (index, field, value) => {
    const updatedHypotheses = [...hypotheses];
    updatedHypotheses[index] = { ...updatedHypotheses[index], [field]: value };
    setHypotheses(updatedHypotheses);
  };

  const toggleBusinessTypeFilter = (index) => {
    const updatedHypotheses = [...hypotheses];
    updatedHypotheses[index].showFilter = !updatedHypotheses[index].showFilter;
    setHypotheses(updatedHypotheses);
  };

  const addHypothesis = () => {
    setHypotheses([
      ...hypotheses,
      { industry: '', factor: '', condition: '높으면', showFilter: false, errors: {} }
    ]);
  };

  const handleSubmit = async () => {
    let hasError = false;
    const updatedHypotheses = hypotheses.map(hypothesis => {
      const errors = {};
      if (!hypothesis.industry && !filter.selectedBusinessTypes[0]?.name) {
        errors.industry = '업종을 선택하세요';
      }
      if (!hypothesis.factor) errors.factor = '요인을 선택하세요';
      if (!hypothesis.condition) errors.condition = '조건을 선택하세요';
  
      if (Object.keys(errors).length > 0) hasError = true;
  
      return { ...hypothesis, errors };
    });
  
    setHypotheses(updatedHypotheses);
  
    if (!hasError) {
      setHasSubmitted(true);
      setIsLoading(true);
      await fetchResults();
      setIsLoading(false);
    }
  };

  const getResultLabel = (correlationCoefficient) => {
    const coefficient = parseFloat(correlationCoefficient);
    if (coefficient >= 0.5) return '통계적으로 유의미합니다';
    return '통계적으로 유의미하지 않습니다';
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>내 생각 확인하기</Typography>
        <Typography variant="subtitle1" gutterBottom>
          {nickname ? `${nickname}님!` : '익명님'} 의 가게는 어떤 곳에 있어야 성공할까? 생각을 입력해주세요. 데이터로 분석해드려요.
        </Typography>

        {hypotheses.map((hypothesis, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="h6">가정 {index + 1}</Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="업종 선택"
                value={filter.selectedBusinessTypes[0]?.name || hypothesis.industry}
                onClick={() => toggleBusinessTypeFilter(index)}
                InputProps={{ readOnly: true }}
                error={!!hypothesis.errors.industry}
                helperText={hypothesis.errors.industry}
              />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  select
                  label="요인 선택"
                  value={hypothesis.factor}
                  onChange={(e) => handleFactorChange(index, e.target.value)}
                  error={!!hypothesis.errors.factor}
                  helperText={hypothesis.errors.factor}
                  SelectProps={{
                    MenuProps: menuProps,
                  }}
                >
                  {factors.map((factor) => (
                    <MenuItem key={factor} value={factor}>
                      {factor}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  select
                  label="조건"
                  value={hypothesis.condition}
                  onChange={(e) => handleConditionChange(index, e.target.value)}
                  error={!!hypothesis.errors.condition}
                  helperText={hypothesis.errors.condition}
                  SelectProps={{
                    MenuProps: menuProps,
                  }}
                >
                  <MenuItem value="높으면">높으면</MenuItem>
                  <MenuItem value="낮으면">낮으면</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <Collapse in={hypothesis.showFilter}>
              <Box sx={{ mt: 2, mb: 2 }}>
                <BusinessTypeFilter
                  onSelect={(selected) => handleIndustrySelect(selected, index)}
                  onDataFetched={handleBusinessTypeDataFetched}
                  initialData={businessTypeData}
                  singleSelect={true}
                />
              </Box>
            </Collapse>
          </Box>
        ))}

        <Typography variant="body1" gutterBottom>
          매출이 높을 것이다
        </Typography>

        <Button variant="outlined" onClick={addHypothesis} sx={{ mt: 2, mb: 2 }}>
          가정 추가
        </Button>

        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth >
          확인하기
        </Button>
        {isLoading && (
          <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '200px', 
            mt: 4 
          }}
        >
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>분석 중입니다</Typography>
        </Box>
        )}
      </Paper>

      {!isLoading && results.length > 0 && (
        <Box sx={{ mt: 4 }}>
          {results.map((result, index) => (
            <Card key={index} sx={{ mb: 2, backgroundColor: '#f5f5f5', boxShadow: 'none', border: '1px solid #e0e0e0' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>가정 {index + 1}</Typography>
                {result.length > 0 && (
                  <>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>{result[0].serviceIndustryName}</strong>은/는 <strong>{hypotheses[index].factor}</strong>이/가 <strong>{hypotheses[index].condition}</strong> 매출이 높을 것이다
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {result[0].serviceIndustryName}와 {hypotheses[index].factor}의 점포당 매출액의 상관계수는 {parseFloat(result[0].correlationCoefficient).toFixed(2)}로
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      100개의 요인 중 {result[0].rank}위 입니다
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      backgroundColor: parseFloat(result[0].correlationCoefficient) >= 0.5 ? '#e3f2fd' : '#ffebee',
                      padding: '10px',
                      borderRadius: '4px'
                    }}>
                      {parseFloat(result[0].correlationCoefficient) >= 0.5 ? (
                        <SentimentSatisfiedAltIcon sx={{ color: '#2196f3', mr: 1 }} />
                      ) : (
                        <SentimentVeryDissatisfiedIcon sx={{ color: '#f44336', mr: 1 }} />
                      )}
                      <Typography sx={{ 
                        color: parseFloat(result[0].correlationCoefficient) >= 0.5 ? '#2196f3' : '#f44336',
                        fontWeight: 'bold'
                      }}>
                        {getResultLabel(result[0].correlationCoefficient)}
                      </Typography>
                    </Box>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default CheckThought;