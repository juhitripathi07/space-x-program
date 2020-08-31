import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spacex-filters',
  templateUrl: './spacex-filters.component.html',
  styleUrls: ['./spacex-filters.component.css']
})
export class SpacexFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filterLaunchYr(year: any) {
    console.log(year);
  }

}
