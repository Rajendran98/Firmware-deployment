import { TestBed } from '@angular/core/testing';

import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';

describe('ServicesService', () => {
  let service: ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
    });
    service = TestBed.inject(ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
