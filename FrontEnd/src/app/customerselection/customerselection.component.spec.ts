import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerselectionComponent } from './customerselection.component';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';


describe('CustomerselectionComponent', () => {
  let component: CustomerselectionComponent;
  let fixture: ComponentFixture<CustomerselectionComponent>;
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,ApolloTestingModule],
      declarations: [ CustomerselectionComponent ]
  
    })
    .compileComponents();
  
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
