import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-outfit-recommendation',
  templateUrl: './outfit-recommendation.component.html',
  styleUrls: ['./outfit-recommendation.component.scss']
})
export class OutfitRecommendationComponent {
constructor(private store: Store){}
  weather$ = this.store.select((state:any) => state.weather.current);

getOutfitAdvice(weather: any): string {
  const temp = weather.main.temp;
  const condition = weather.weather[0].main.toLowerCase();

  if (condition.includes('rain')) return 'Take an umbrella!';
  if (temp < 18) return 'Wear a jacket!';
  if (temp > 30) return 'Wear light clothes and use sunscreen!';
  return 'Dress comfortably!';
}

}
