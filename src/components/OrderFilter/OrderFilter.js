import React, {useState} from 'react';
import {connect} from 'react-redux';
import './OrderFilter.scss';
import {clearOrderBy, ORDER_BY_ASC, ORDER_BY_DESC, orderByAsc, orderByDesc} from "../../actions";

const OrderFilter = ({dispatch}) => {

    let removeSelected;
    const [selected, setSelected] = useState('');

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        if(value === ORDER_BY_ASC) {
            dispatch(orderByAsc());
        } else {
            dispatch(orderByDesc());
        }
    };

    const removeFilter = (e) => {

        const buttons = document.getElementsByName('orderByPrice');

        buttons.forEach(el => {
            el.checked = false;
        });

        dispatch(clearOrderBy());
        setSelected('');
    };

    if(selected) {
        removeSelected  =  <span onClick={removeFilter} className="text-remove-selected text-right">Remove filter</span>
    }



    return (
        <div className="sidebar-card card--filter">
            <a className="card-title" href="#collapse2" data-toggle="collapse" href="#collapse2" role="button"
               aria-expanded="false" aria-controls="collapse2">
                <h5>Filter Products
                    <span className="icon-arrow-down"></span>
                </h5>
            </a>
            <div className="collapse show collapsible-content" id="collapse2">
                <ul className="card-content">
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="opt1" className="custom-control-input" name="filter_opt"/>
                                <label className="custom-control-label" htmlFor="opt1">Trending Products</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="opt2" className="custom-control-input" name="filter_opt"/>
                                <label className="custom-control-label" htmlFor="opt2">Popular Products</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="opt3" className="custom-control-input" name="filter_opt"/>
                                <label className="custom-control-label" htmlFor="opt3">New Products</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="opt4" className="custom-control-input" name="filter_opt"/>
                                <label className="custom-control-label" htmlFor="opt4">Best Seller</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="opt5" className="custom-control-input" name="filter_opt"/>
                                <label className="custom-control-label" htmlFor="opt5">Best Rating</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="opt6" className="custom-control-input" name="filter_opt"/>
                                <label className="custom-control-label" htmlFor="opt6">Free Support</label>
                        </div>
                    </li>
                </ul>
            </div></div>
    );
};

export default connect()(OrderFilter);