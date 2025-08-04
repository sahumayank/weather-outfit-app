import { createAction, props } from '@ngrx/store';


export const loadWeather = createAction('[Weather] Load', props<{ city: string }>());
export const loadWeatherSuccess = createAction('[Weather] Success', props<{ data: any }>());
export const loadWeatherFailure = createAction('[Weather] Failure', props<{ error: any }>());
