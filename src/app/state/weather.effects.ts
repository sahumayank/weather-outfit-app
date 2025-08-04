import { Store } from '@ngrx/store';
import { AppState } from './index';
import { selectWeatherState } from './weather.selectors';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import * as WeatherActions from './weather.actions';
import { WeatherService } from '../core/services/weather.service';

@Injectable()
export class WeatherEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadWeather),
      withLatestFrom(this.store.select(selectWeatherState)),
      switchMap(([action, state]) => {debugger;
        const cachedData = state?.cityCache[action.city.toLowerCase()];
        if (cachedData) {
          return of(WeatherActions.loadWeatherSuccess({ data: cachedData }));
        } else {
          return this.weatherService.getWeather(action.city).pipe(
            map(data => WeatherActions.loadWeatherSuccess({ data })),
            catchError(error => of(WeatherActions.loadWeatherFailure({ error: error.message })))
          );
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private weatherService: WeatherService
  ) {}
}
