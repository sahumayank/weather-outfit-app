import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//import { selectSearchHistory } from 'src/app/state/weather.selectors';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss'],
})
export class SearchHistoryComponent implements OnInit {
  constructor(private store: Store) {}
  list: any;
  ngOnInit(): void {
    this.store
      .select((state: any) => state.weather.history)
      .subscribe((data) => {
        this.list = data;
        console.log(data);
      });
  }
}
