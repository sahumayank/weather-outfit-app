import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { OutfitRecommendationComponent } from './outfit-recommendation/outfit-recommendation.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherSearchComponent,
    WeatherDisplayComponent,
    OutfitRecommendationComponent,
    SearchHistoryComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class WeatherModule { }
