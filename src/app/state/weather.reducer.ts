import { createFeature, createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';

export interface WeatherState {
  current: any;
  history: string[];
  error: string | null;
  loading: boolean;
  cityCache: { [city: string]: any }; // ✅ cache by city name
}

const initialState: WeatherState = {
  current: null,
  history: [],
  error: null,
  loading: false,
  cityCache: {} // ✅ initialize
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.loadWeather, (state) => ({
    ...state,
    loading: true
  })),
  on(WeatherActions.loadWeatherSuccess, (state, { data }) => ({
    ...state,
    current: data,
    history: [data.name, ...state.history.filter(c => c !== data.name)].slice(0, 5),
    cityCache: { ...state.cityCache, [data.name.toLowerCase()]: data }, // ✅ cache it
    loading: false,
    error: null
  })),
  on(WeatherActions.loadWeatherFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
