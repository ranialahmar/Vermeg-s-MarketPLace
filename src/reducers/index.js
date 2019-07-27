import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {brandFilterReducer} from "./brand.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer"

export default combineReducers({
    shop,
    brandFilter: brandFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer,
    p: productReducer,
    cat: categoryReducer
});

