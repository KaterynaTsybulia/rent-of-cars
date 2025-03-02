import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import carsReducer from './cars/slice.js';
import filterReducer from './filter/slice.js';



const persistFiltersConfig = {
  key: 'filters',  
  version: 1,
  storage,
  whitelist: ['favourites'], 
};

const persistedFiltersReducer = persistReducer(persistFiltersConfig, filterReducer);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: persistedFiltersReducer,  
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],  
      },
    }),
});

export const persistor = persistStore(store); 

export default store;
