import { Component, OnInit } from '@angular/core';
import { TimePreq } from './model/time-preq';
import { TimePreqService } from './service/time-preq/time-preq.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  times: TimePreq[];
  DRIVERS_ON_PAGE: number;

  constructor(private timePreqService: TimePreqService) {
    this.DRIVERS_ON_PAGE = 4;
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.timePreqService.getAllTimesPreq().subscribe(data => {this.times = data;
    });
  }

  numbersToList() {
    const items: number[] = [];
    for (let i = 0; i <= this.times.length + this.DRIVERS_ON_PAGE; i += this.DRIVERS_ON_PAGE) {
       items.push(i);
    }
    return items;
  }

  driverOnPage() {
    const items: number[] = [];
    for (let i = 1; i <= this.DRIVERS_ON_PAGE; i++) {
       items.push(i);
    }
    return items;
  }

}
