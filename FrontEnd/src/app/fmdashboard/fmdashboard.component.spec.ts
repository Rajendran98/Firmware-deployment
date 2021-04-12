import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FmdashboardComponent } from './fmdashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

describe('FmdashboardComponent', () => {
  let component: FmdashboardComponent;
  let fixture: ComponentFixture<FmdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,  ApolloTestingModule],
      declarations: [ FmdashboardComponent ]
    })
    .compileComponents();
   
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
