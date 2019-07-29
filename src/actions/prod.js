import request from 'axios'
import axios from 'axios';
import { PRODUCTS_SAVED, AJAX_BEGIN, AJAX_END, PRODUCTS_ALL } from './actionTypes'
import {async} from "q";
//import {Prod_all} from "./actionTypes";

export function saveProduct(productToSave) {

    return function(dispatch){
        dispatch({ type: AJAX_BEGIN })

        return request.post('/api/products/save', productToSave )
            .then(function(response){
                dispatch({ type: PRODUCTS_SAVED, saved : response.data })
                dispatch({ type: AJAX_END })
            })
            .catch(function(response){
                dispatch({ type: AJAX_END })
            })
    }
}

export const loadAllProducts=()=>  dispatch=>

{
    fetch("/products")
        .then(response=>response.json())
        .then(prod => dispatch({type: PRODUCTS_ALL, payload:prod}))
}

/*
export const  loadAllProducts=()=>  dispatch=>
 {
    const res= axios.get("http://localhost:8080/products");
    dispatch({type: PRODUCTS_ALL, prod: res.data});

}

*/