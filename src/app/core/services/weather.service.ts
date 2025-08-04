import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeather(city: string): Observable<any> {
    const apiKey = '1463545c7b3dacb3d092bde2520258cd';
    const city1='London'
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  }
}
