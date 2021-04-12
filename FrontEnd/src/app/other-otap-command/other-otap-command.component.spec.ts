import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherOTAPCommandComponent } from './other-otap-command.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';


describe('OtherOTAPCommandComponent', () => {
  let component: OtherOTAPCommandComponent;
  let fixture: ComponentFixture<OtherOTAPCommandComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule,MatSnackBarModule,MatDialogModule,ApolloTestingModule],
      declarations: [ OtherOTAPCommandComponent],
      
    })
    .compileComponents();
    
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherOTAPCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
