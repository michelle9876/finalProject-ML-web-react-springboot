// src/mockApi.js
export const fetchDistricts = () => {
    return Promise.resolve([
      {
        code: '11140',
        name: '중구',
        collection: [
          { name: '광희동', code: '11140590' },
          { name: '신당동', code: '11140600' },
          // ... 추가 목업 데이터
        ],
      },
      {
        code: '11170',
        name: '종로구',
        collection: [
          { name: '청운효자동', code: '11170101' },
          { name: '사직동', code: '11170102' },
          // ... 추가 목업 데이터
        ],
      },
      // ... 추가 목업 데이터
    ]);
  };
  
  export const fetchMarketsBySubdistrictCode = (code) => {
    const markets = {
      '11170101': [
        { name: '인현시장', latitude: 37.567001, longitude: 127.176216, code: '3130032' },
        // ... 추가 목업 데이터
      ],
      '11170101': [
        { name: '신당시장', latitude: 37.567200, longitude: 127.176300, code: '3130033' },
        // ... 추가 목업 데이터
      ],
      // ... 추가 목업 데이터
    };
    return Promise.resolve(markets[code] || []);
  };
  