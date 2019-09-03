import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TimePreqService } from './service/time-preq/time-preq.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('AppComponent', () => {
  let service: TimePreqService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [HttpClientModule, NgbModule],
      providers: [TimePreqService]
    }).compileComponents();
    service = TestBed.get(TimePreqService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
