import { selectFavourites } from "../filter/selectors";
import { createSelector } from "reselect";


export const selectCars = state => state.cars.carsPage.cars;
export const selectTotalCars = state => state.cars.carsPage.totalCars;
export const selectPage = state => state.cars.carsPage.page;
export const selectTotalPages = state => state.cars.carsPage.totalPages;
export const selectCarInfo = state => state.cars.carsPage;

export const selectBrands = (state) => state.cars.brands;

export const selectPrice = (state) => {
  const cars = selectCars(state); 
  const rentalPrice = cars ? cars.map(car => car.rentalPrice) : []; 
  return [...new Set(rentalPrice)]; 
};


export const selectLoading = state => state.cars.loading;
export const selectError = state => state.cars.error;


export const selectCarsFavourites = createSelector(
  [selectCars, selectFavourites],

  (cars, favourites) => {
    if (!cars || !favourites) return [];
    return cars.filter(car => favourites.includes(car.id));
  }
);

