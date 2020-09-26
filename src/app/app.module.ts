import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';

import { learningReducer } from './reducers/learning.reducer';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';



@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({learning:learningReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
