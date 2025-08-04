import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent {
constructor(private store: Store){}

weather$ = this.store.select((state:any) => state.weather.current);

}
