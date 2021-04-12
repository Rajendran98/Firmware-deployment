import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UploadJavaFirmwareComponent } from './upload-java-firmware.component';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

describe('UploadJavaFirmwareComponent', () => {
  let component: UploadJavaFirmwareComponent;
  let fixture: ComponentFixture<UploadJavaFirmwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,MatSnackBarModule,FormsModule],
      declarations: [ UploadJavaFirmwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadJavaFirmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
