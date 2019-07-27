import {combineReducers} from 'redux';
import productReducer from "../reducers/productReducer";
import shop from "../reducers/shop.reducer";
import {brandFilterReducer} from "../reducers/brand.filter.reducer";
import {orderByPriceReducer} from "../reducers/orderByPrice.filter.reducer";
import  {paginationReducer }from "../reducers/pagination.reducer";
import categoryReducer from "../reducers/categoryReducer"
const appReducer = combineReducers({
    shop,
    brandFilter: brandFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer,
    p:productReducer,
    cat:categoryReducer
});



export default (state, action) => appReducer(state, action);
