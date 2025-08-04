import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { OutfitRecommendationComponent } from './outfit-recommendation/outfit-recommendation.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

const routes: Routes = [
   { path: '', component: WeatherComponent }
//  { path: 'search', component: WeatherSearchComponent },
//   { path: 'result', component: WeatherDisplayComponent },
//   { path: 'outfit', component: OutfitRecommendationComponent },
//   { path: 'history', component: SearchHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
