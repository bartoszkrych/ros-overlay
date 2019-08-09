import { Component, OnInit } from '@angular/core';
import { TimePreq } from './model/time-preq';
import { TimePreqService } from './service/time-preq/time-preq.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  times : TimePreq[];
  
  constructor(private timePreqService: TimePreqService){}

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData(){
    this.timePreqService.getAllTimesPreq().subscribe(data => {
      this.times = data;
    });
  }

}
