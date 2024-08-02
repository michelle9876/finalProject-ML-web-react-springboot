import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRegions: [],
  selectedBusinessTypes: [],
  rentMin: "1",
  rentMax: null,  
  areaMin: "1", 
  areaMax: null,
  regionData: null,  // 추가
  businessTypeData: null,  // 추가
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilter: () => initialState,
     setRegionData: (state, action) => {  // 추가
      state.regionData = action.payload;
    },
    setBusinessTypeData: (state, action) => {  // 추가
      state.businessTypeData = action.payload;
    },
  },
});

export const { setFilter, resetFilter, setRegionData, setBusinessTypeData } = filterSlice.actions;
export default filterSlice.reducer;

export const selectFilter = (state) => state.filter;