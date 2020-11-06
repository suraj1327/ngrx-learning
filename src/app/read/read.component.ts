import { Component, OnInit } from '@angular/core';
import  {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import { Learning } from '../models/learning.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  usersList:any;
  learnings : Observable<Learning[]>;
  constructor(private store:Store<AppState>,private service:UsersService) {
    this.learnings = store.select('learning');
   }


  fetchUsers(){
    var userId='1';
    this.service.fetchListOfUsers(userId).subscribe((response:Response)=>{
          this.usersList= response;
    })
  }
  ngOnInit() {
     this.fetchUsers();
  }

}
