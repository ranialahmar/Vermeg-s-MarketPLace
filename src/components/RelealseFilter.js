
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/OrderFilter/OrderFilter.scss';
import React, {Component} from 'react';
import {addBrandToFilter, removeBrandFromFilter} from "../actions";
class RelealseFilter extends  Component{


    handleSelectBox = (e) => {
        const name = e.target.name;
        const value = e.target.checked;

        if(e.target.checked) {
            this.props.dispatch(addBrandToFilter(name));
        } else {
            this.props.dispatch(removeBrandFromFilter(name));
        }
    };
render() {



    return(
        <div className="sidebar-card card--category card--date-range">
            <a className="card-title" href="#collapse4" data-toggle="collapse" href="#collapse4" role="button"
               aria-expanded="false" aria-controls="collapse4">
                <h5>Release date
                    <span className="icon-arrow-down"></span>
                </h5>
            </a>
            <div className="collapse show collapsible-content" id="collapse4">
                <ul className="card-content">
                    <li>
                        <a href="#">
                            Last Week
                            <span className="item-count">35</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Last Month
                            <span className="item-count"> 45</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Last 6 Month
                            <span className="item-count">13</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Last Year
                            <span className="item-count">08</span>
                        </a>
                    </li>

            </ul>
        </div>

        </div>



);
}}
export default RelealseFilter;