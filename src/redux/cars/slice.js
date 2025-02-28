import { createSlice } from '@reduxjs/toolkit';
import { apiFetchCars, apiFetchBrands } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carsPage: {
      cars: null,
      totalCars: null,
      page: null,
      totalPages: null,
    },
    brands: null,
    loading: null,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(apiFetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiFetchCars.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(apiFetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiFetchBrands.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiFetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload.brands;
      })
      .addCase(apiFetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;