import { TestBed } from '@angular/core/testing';
import { TimePreqService } from './time-preq.service';
import { HttpClientModule } from '@angular/common/http';

describe('TimePreqService', () => {
  let service: TimePreqService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TimePreqService]
    });
    service = TestBed.get(TimePreqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should returned list of cars', () => {
    service.getAllTimesPreq().subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
    });
  })
});
