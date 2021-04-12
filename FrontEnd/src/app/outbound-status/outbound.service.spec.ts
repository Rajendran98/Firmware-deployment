import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { OutboundService } from './outbound.service';

describe('OutboundService', () => {
  let service: OutboundService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule],
    });
    service = TestBed.inject(OutboundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
