import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareReportComponent } from './firmware-report.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {MatSnackBarModule } from '@angular/material/snack-bar';

describe('FirmwareReportComponent', () => {
  let component: FirmwareReportComponent;
  let fixture: ComponentFixture<FirmwareReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,MatSnackBarModule],
      declarations: [ FirmwareReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
