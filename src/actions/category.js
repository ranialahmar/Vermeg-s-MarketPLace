import {CAT_ALL} from "./actionTypes";

export const loadAllCategories=()=>  dispatch=>

{
    fetch("http://localhost:8080/categories")
        .then(response=>response.json())
        .then(catg => dispatch({type: CAT_ALL, payload:catg}))
}
