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
    brands: [],
    loading: false,
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
        state.carsPage.totalCars = action.payload.totalCars;
        state.carsPage.page = Number(action.payload.page);
        state.carsPage.totalPages = action.payload.totalPages;
        state.carsPage.cars =
          state.carsPage.page === 1
            ? action.payload.cars
            : [...state.carsPage.cars, ...action.payload.cars];
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
        state.brands = action.payload;
      })
      .addCase(apiFetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;