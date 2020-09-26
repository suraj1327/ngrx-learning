import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import { Learning } from '../models/learning.model';
import * as LearningActions from '../actions/learning.action';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  constructor(private store:Store<AppState>) {
    
   }

   addLearning(name:string,url:string){
    this.store.dispatch(new LearningActions.AddLearning({name:name,url:url}));
   }

  ngOnInit() {
  }

}
