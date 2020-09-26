import {Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Learning} from '../models/learning.model';

export const ADD_LEARNING = '[Learning] Add'
export const REMOVE_LEARNING = '[Learning] Remove'

export class AddLearning implements Action{
    readonly type = ADD_LEARNING;
    constructor(public payload:Learning){

    }
}
export class RemoveLearning implements Action{
        readonly type = REMOVE_LEARNING;
        constructor(public payload:number){
    
        }

}

export type Actions = AddLearning | RemoveLearning;