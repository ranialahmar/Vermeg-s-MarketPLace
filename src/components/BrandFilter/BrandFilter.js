import React, {Component} from 'react';
import {connect} from 'react-redux';
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Header/sty.css';
import {brands} from "../../data/brands";
import {addBrandToFilter, removeBrandFromFilter} from "../../actions";
import {loadAllCategories} from "../../actions/category";
import PropTypes from "prop-types";

class BrandFilter extends Component {

    componentDidMount() {
        this.props.loadAllCategories();
    }

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
    const {dispatch, brandItemsCount} = this.props;
    const listeCat=this.props.cat;
    console.log(listeCat.cat)
    return (
        <div>

        <div className="sidebar-card card--category">
            <a className="card-title" href="#collapse1" data-toggle="collapse" href="#collapse1" role="button"
               aria-expanded="false" aria-controls="collapse1">
                <h5>Categories
                    <span className="icon-arrow-down"></span>
                </h5>
            </a>
            <div className="collapse show collapsible-content" id="collapse1">
            <ul class="card-content">
                {listeCat.cat.map(brand => (
                    <li >
                        <a> {brand.name}</a>


                    </li>
                ))}
            </ul>
            </div>

        </div>
        </div>
    );
}
};

BrandFilter.propTypes={
    loadAllCategories: PropTypes.func.isRequired,
    cat: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const brandItemsCount = {};
    state.shop.products.forEach(p => {
        brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });


    return {
        brandItemsCount,cat:state.cat
    }

};

export default connect(mapStateToProps,{loadAllCategories})(BrandFilter);