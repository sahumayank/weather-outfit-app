import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as fromWeather from './state/weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './state/weather.effects';
import { reducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ weather: fromWeather.weatherReducer }),
    EffectsModule.forRoot([WeatherEffects]),
    StoreDevtoolsModule.instrument(),
    WeatherModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
