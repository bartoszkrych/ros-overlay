import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimePreq } from '../../model/time-preq';

@Injectable()
export class TimePreqService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://republicofsimracers.com';
  }

  getAllTimesPreq(): Observable<TimePreq[]> {
    return this.http.get<TimePreq[]>(`${this.baseUrl}/timetable/preq-overlay/371?server=platinum`);
  }

}
