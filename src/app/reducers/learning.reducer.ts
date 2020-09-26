import {Action} from '@ngrx/store';
import * as LearningActions from '../actions/learning.action';
import {Learning} from '../models/learning.model';

const initialState : Learning = {
    name:'google',
    url : 'www.google.com'
}

export function learningReducer(state:Learning[] = [initialState],action:LearningActions.Actions){
    switch(action.type){
        case LearningActions.ADD_LEARNING:
             return [...state,action.payload]
        default:
            return state;
        }
    
}
