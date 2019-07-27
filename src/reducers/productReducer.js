import {Map} from 'immutable'
import { PRODUCTS_SAVED, PRODUCTS_ALL } from '../actions/actionTypes'


const initialState={
    p:[]
};

export  default function  productReducer(  state = initialState, action){

    switch(action.type) {

        case PRODUCTS_SAVED:
            return state.merge({
                saved: action.saved
            })

        case PRODUCTS_ALL:
            return {
                ...state,
                p: action.payload
            };
        default:
            return state
    }
}