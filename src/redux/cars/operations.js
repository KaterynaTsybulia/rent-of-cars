import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const apiFetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (page, thunkAPI) => {
    const { filters } = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.get('/cars', {
        params: {
          page,
          brand: filters.filters.brand,
          rentalPrice: filters.filters.rentalPrice,
          minMileage: filters.filters.minMileage,
          maxMileage: filters.filters.maxMileage,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const apiFetchCarInfo = createAsyncThunk(
  'cars/fetchCar',
  async (id, thunkAPI) => {
    try {
      const {data} = await axiosInstance.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const apiFetchBrands = createAsyncThunk(
  'cars/fetchBrands',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get('/brands');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);