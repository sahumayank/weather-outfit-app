import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadWeather } from 'src/app/state/weather.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent {
  city = '';
  constructor(private store: Store, private router: Router) {}

  search() {
    if (this.city.trim()) {
      this.store.dispatch(loadWeather({ city: this.city }));
       //this.router.navigate(['/weather/result']);
    }
  }
}
