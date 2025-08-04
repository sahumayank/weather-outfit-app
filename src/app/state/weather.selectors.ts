import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWeather from './weather.reducer';

export const selectWeatherState = createFeatureSelector<fromWeather.WeatherState>('weather');

export const selectCurrentWeather = createSelector(
  selectWeatherState,
  (state) => state.current
);

export const selectSearchHistory = createSelector(
  selectWeatherState,
  (state) => state.history
);

export const selectLoading = createSelector(
  selectWeatherState,
  (state) => state.loading
);
