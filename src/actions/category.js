import {CAT_ALL} from "./actionTypes";

export const loadAllCategories=()=>  dispatch=>

{
    fetch("/categories")
        .then(response=>response.json())
        .then(catg => dispatch({type: CAT_ALL, payload:catg}))
}
