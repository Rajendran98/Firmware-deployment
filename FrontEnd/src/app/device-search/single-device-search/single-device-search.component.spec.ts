import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SingleDeviceSearchComponent } from './single-device-search.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
describe('SingleDeviceSearchComponent', () => {
  let component: SingleDeviceSearchComponent;
  let fixture: ComponentFixture<SingleDeviceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ RouterTestingModule,HttpClientModule,MatSnackBarModule, ApolloTestingModule],
      declarations: [ SingleDeviceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDeviceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
