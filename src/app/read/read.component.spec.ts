import { TestabilityRegistry } from '@angular/core';
import { tick } from '@angular/core/src/render3';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { UsersService } from '../services/users.service';

import { ReadComponent } from './read.component';

describe('ReadComponent', () => {
  let component: ReadComponent;
  let fixture: ComponentFixture<ReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadComponent ],
      providers:[UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toEqual({});
  });

  it('should call service method and return user details as []',(fakeAsync(()=>{
  
     let fixture = TestBed.createComponent(ReadComponent);
     let component = fixture.debugElement.componentInstance;
     let userService = fixture.debugElement.injector.get(UsersService);
     let stub =spyOn(userService,'fetchListOfUsers').and.callFake(()=>{
     return of([]).pipe(delay(300));
    
     });
     component.fetchUsers();
     tick(300);
     expect(component.users).toEqual([]);

  })))
});
