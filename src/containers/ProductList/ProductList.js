
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Header/sty.css'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from "../../components/Product/Product";
import { loadAllProducts } from "../../actions/prod";
import {brandFilter} from "../../pipes/brandFilter";
import {orderByFilter} from "../../pipes/orderByFilter";
import LayoutMode from "../../components/LayoutMode/LayoutMode";
import {paginationPipe} from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/Pagination";
import PropTypes from 'prop-types';
class ProductList extends Component {

    state = {
        colValue : 'col-lg-4',
        perPage: 12,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 3,
        list:[]
    };

    changeLayout = (n) => {
        this.setState({gridValue: n});

        let realGridValue;

        if(n === 4) {
            realGridValue = 3
        } else {
            realGridValue = 4;
        }

      this.setState({
          colValue: `col-lg-${realGridValue}`
      });
    };


    onPrev = () => {
        const updatedState = {...this.state};
        updatedState.currentPage = this.state.currentPage - 1;
        this.setState(updatedState);
    };


    onNext = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1
        });
    };

    goPage = (n) => {
        this.setState({
            ...this.state,
            currentPage: n
        });
    }

    componentDidMount()
    {   this.props.loadAllProducts();

    }


render() {

 const lis=this.props.p;
    console.log(lis.p);

        let isActive = this.state.colValue[this.state.colValue.length -1];

        return (

<div>



    <div className="row">

                        {lis.p.map(brand => (

                                    <Product key={brand.id} product={brand} id={brand.id} />


                        ))}
    </div>




</div>

        );
    }
}

ProductList.propTypes={
    loadAllProducts: PropTypes.func.isRequired,
    p: PropTypes.object.isRequired
};




/*const mapStateToProps = state => ({
    brands :state.brandFilter,
    orderBy : state.orderBy,
    pro:state.pro
});

export default connect(mapStateToProps, {requestProducts})(ProductList);*/

const mapStateToProps = state => {
    const brands = state.brandFilter;
    const orderBy = state.orderBy;

    const filterByBrandArr = brandFilter(state.shop.products, brands);
    const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);


    return {products: filterByOrderArr ,p:state.p}
};

export default connect(mapStateToProps, {loadAllProducts})(ProductList);
