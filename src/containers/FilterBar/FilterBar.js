/*import React, {Component} from 'react';
import BrandFilter from "../../components/BrandFilter/BrandFilter";
import OrderFilter from "../../components/OrderFilter/OrderFilter";
import {connect} from "react-redux";
import {loadAllCategories} from "../../actions/category";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";

class FilterBar extends Component {


    componentDidMount() {
        this.props.loadAllCategories();
    }

    render() {
        const lis=this.props.cat;
        console.log(lis);

        return (
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-12">
                        <BrandFilter/>
                    </div>
                    <div className="col-12">
                        <OrderFilter/>
                    </div>
                </div>
            </div>
        );
    }
}

FilterBar.propTypes={
    loadAllCategories: PropTypes.func.isRequired,
    cat: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {

  return{cat:state.cat
  }

};


export default connect(mapStateToProps,{loadAllCategories})(FilterBar);

*/
import React, {Component} from 'react';
import BrandFilter from "../../components/BrandFilter/BrandFilter";
import OrderFilter from "../../components/OrderFilter/OrderFilter";
import RelealseFilter from "../../components/RelealseFilter";
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Header/sty.css'
class FilterBar extends Component {
    render() {
        return (
            <div>


                        <BrandFilter/>


                        <OrderFilter/>


                        <RelealseFilter/>
            </div>

        );
    }
}

export default FilterBar;