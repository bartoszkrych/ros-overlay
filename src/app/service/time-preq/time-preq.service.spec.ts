import { TestBed, inject } from '@angular/core/testing';

import { TimePreqService } from './time-preq.service';

describe('TimePreqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimePreqService]
    });
  });

  it('should be created', inject([TimePreqService], (service: TimePreqService) => {
    expect(service).toBeTruthy();
  }));
});
