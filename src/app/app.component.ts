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

  numbersToList(){
    var items: number[] = [];
    for(var i = 0; i <= this.times.length; i++){

       items.push(i);
       i=i+3;
    }
    return items;
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){

       items.push(i);
    }
    return items;
  }

}
