import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimePreq } from '../../model/time-preq';

@Injectable()
export class TimePreqService {

  private baseUrl :string;
  
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://republicofsimracers.com'
  }

  getAllTimesPreq(): Observable<TimePreq[]> {
    return this.http.get<TimePreq[]>(`${this.baseUrl}/en/timetable/preq-overlay/371?fbclid=IwAR1XlzitRCGxFlRgYkjftNcO6Y_JvlvLlVu5s6FHylSKKQcmrkxS5baOX64&server=platinum`);
  }

}
