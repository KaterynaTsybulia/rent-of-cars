import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filters: {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  },
  }
const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilters: (state, action) => {
      state.filters = action.payload; 
    },
  },
});

export const { changeFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
