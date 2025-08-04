import { ActionReducerMap } from "@ngrx/store";
import { weatherReducer, WeatherState } from "./weather.reducer";

export interface AppState {
  weather: WeatherState;
}

export const reducers: ActionReducerMap<AppState> = {
  weather: weatherReducer,
};
