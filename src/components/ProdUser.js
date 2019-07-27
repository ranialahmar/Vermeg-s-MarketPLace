import React, {Component} from 'react';
import Header from "./Header/Header";
import Sheader from "./Sheader/Sheadrer";
import FilterBar from "../containers/FilterBar/FilterBar";
import ProductList from "../containers/ProductList/ProductList";
import Footer from "./Footer/Footer";



class ProdUser extends Component{

    render(){

        return(
            <div>
                <Header navv="user" />

                <Sheader />
                <div className="filter-area product-filter-area filter-area2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="filter-bar">

                                    <div className="filter__option filter--select">
                                        <div className="select-wrap">
                                            <select name="price">
                                                <option value="12">12 Items per page</option>
                                                <option value="15">15 Items per page</option>
                                                <option value="25">25 Items per page</option>
                                            </select>
                                            <span className="icon-arrow-down"></span>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <section className="product-grid p-bottom-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-12 order-lg-0 order-md-1 order-sm-1 order-1">
                                <aside className="sidebar product--sidebar">

                                    <FilterBar/>  </aside></div>
                            <div className="col-xl-9 col-lg-8 col-md-12 order-lg-1 order-md-0 order-sm-0 order-0 product-list">

                                <ProductList/>
                                <nav className="pagination-default">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true"><i className="fa fa-long-arrow-left"></i></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
                                        <li className="page-item"><a className="page-link" href="#">10</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true"><i className="fa fa-long-arrow-right"></i></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div></div>
                </section>
                <section className="cta2 bgimage">
                    <div className="bg_image_holder">
                        <img src="img/cta-bg.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="cta-content">
                                    <div className="cta-text">
                                        <h2>Ready To Join Our Marketplace!</h2>
                                        <p>Grow your marketing and be happy with your online business</p>
                                    </div>
                                    <div className="cta-btn">
                                        <a href="#" className="btn btn--md btn-primary">Join Us Today</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <Footer/>
            </div>

        )
    }
}
export  default ProdUser;