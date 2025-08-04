import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'weather',
  loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) }, { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) }
//  { path: '', redirectTo: 'weather/search', pathMatch: 'full' },
//   {
//     path: 'weather',
//     loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule),
//   },
//   { path: '**', redirectTo: 'weather/search' }, // fallback

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
