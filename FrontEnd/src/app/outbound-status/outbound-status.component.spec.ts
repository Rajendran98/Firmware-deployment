import { async, ComponentFixture, TestBed ,inject } from '@angular/core/testing';

import { OutboundStatusComponent } from './outbound-status.component';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('OutboundStatusComponent', () => {
  let component: OutboundStatusComponent;
  let fixture: ComponentFixture<OutboundStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  HttpClientTestingModule],
      declarations: [ OutboundStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([HttpTestingController], () => {
    expect(component).toBeTruthy();
  }));
});
