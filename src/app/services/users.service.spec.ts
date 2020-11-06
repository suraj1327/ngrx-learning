import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it('should fetch list of users',()=>{
    const users=[{
      id:'1',name:'a',email:'b',username:'c'
    }];

    const service:UsersService =TestBed.get(UsersService);
    service.fetchListOfUsers('1').subscribe((users)=>{
             expect(users.length).toEqual(1);
    })

  })
});
