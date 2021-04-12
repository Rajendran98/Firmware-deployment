import { TestBed } from '@angular/core/testing';

import { DevicesearchService } from './devicesearch.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DevicesearchService', () => {
  let service: DevicesearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule],
    });
    service = TestBed.inject(DevicesearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
