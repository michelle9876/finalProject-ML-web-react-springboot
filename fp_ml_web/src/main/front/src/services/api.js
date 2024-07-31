import axios from 'axios';


// 서버 주소를 환경 변수로 관리 전
// export const fetchPredictions = async ({ pageParam = 0, queryKey }) => {
//   const [_, filterData] = queryKey;
//   const response = await axios.post(`http://localhost:8080/api/predictions?page=${pageParam}&size=10`, filterData);
//   return response.data;
// };

// axios 인스턴스 생성
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000, // 10초
});

export const fetchPredictions = async ({ pageParam = 0, queryKey }) => {
  try {
    const [_, filterData] = queryKey;
    const response = await api.post('/predictions', filterData, {
      params: {
        page: pageParam,
        size: 10
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching predictions:', error);
    throw error;
  }
};