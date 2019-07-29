import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import {addProductToCart} from "../../actions";
import axios from 'axios';
import sing from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/single2.jpg'
import m1 from './../img/m1.png'
import m2 from './../img/m2.png'
import m3 from './../img/m3.png'
import m4 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/m4.png'
import m5 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/m5.png'
import m6 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/m6.png'
import m7 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/m7.png'
import m8 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/m8.png'
import m9 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/m9.png'
import m10 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/m10.png'
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Header/sty.css';
import Header from "../Header/Header";
class ProductDetail extends Component {

    state={id:this.props.location.state.id,
            title:this.props.location.state.title,
            description:this.props.location.state.description,
            version:this.props.location.state.version,
            date_delivary:this.props.location.state.date_delivary,
            date_update:this.props.location.state.date_update,
//imag:this.props.location.state.imag,
        category:this.props.location.state.categorie,
        comments:this.props.location.state.comments,
        name:[],
        path:this.props.location.state.path
    }


handleComment=()=>{



}
    render() {


console.log(this.props.location.state.comments);
if(this.props.location.state.comments){
        return (
            <div>
                <Header navv="user"/>
                <section className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="breadcrumb-contents">
                                    <h2 className="page-title">DigiPro Multipurpose Marketplace HTML Template</h2>
                                    <div className="breadcrumb">
                                        <ul>
                                            <li>
                                                <a href="#">Home</a>
                                            </li>
                                            <li className="active">
                                                <a href="#">Single Product</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="single-product-desc">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="item-preview">
                                    {(() => {
                                        if (this.state.path==="solife.png") {
                                            return (
                                                <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/solife.png`)} alt="" className="img-fluid"/>
                                            )
                                        } else if (this.state.path==="megara.png") {
                                            return (
                                                <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/megara.png`)} alt="" className="img-fluid"/>
                                            )
                                        }   else if (this.state.path==="agile.png") {
                                            return (
                                                <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/agile.png`)} alt="" className="img-fluid"/>
                                            )
                                        }  else if (this.state.path==="colline.png") {
                                            return (
                                                <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/colline.png`)} alt="" className="img-fluid"/>
                                            )
                                        }  else if (this.state.path==="massai.png") {
                                            return (
                                                <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/massai.png`)} alt="" className="img-fluid"/>
                                            )
                                        }
                                        else if (this.state.path==="palmyra.png") {
                                            return (
                                                <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/palmyra.png`)} alt="" className="img-fluid"/>
                                            )
                                        } else {
                                            return (
                                                <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/soliam.png`)} alt="" className="img-fluid"/>
                                            )
                                        }
                                    })()}

                                        <div className="item-preview--excerpt">

                                            <div className="item-preview--action">
                                                <div className="action-btns">
                                                    <a href="#" className="btn btn--lg btn-primary">Live Preview</a>
                                                    <a href="#" className="btn btn--lg btn--icon btn-outline-primary">
                                                        <span className="lnr icon-heart"></span>Add To Favorites</a>
                                                </div>
                                            </div>


                                            <div className="item-preview--activity">
                                                <div className="activity-single">
                                                    <p>
                                                        <span className="icon-basket"></span> Total Sales
                                                    </p>
                                                    <p>2451</p>
                                                </div>
                                                <div className="activity-single">
                                                    <p>
                                                        <span className="icon-star"></span> Reviews
                                                    </p>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-o"></i>
                                                        </li>
                                                        <li>(35)</li>
                                                    </ul>
                                                </div>
                                                <div className="activity-single">
                                                    <p>
                                                        <span className="icon-heart"></span>Favorities
                                                    </p>
                                                    <p>425</p>
                                                </div>
                                            </div>

                                        </div>
                                </div>

                                <div className="item-info">
                                    <div className="item-navigation">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li>
                                                <a href="#product-details"  id="tab1"
                                                   aria-controls="product-details" className="active"  aria-selected="true"
                                                   role="tab" data-toggle="tab" >
                                                    <span className="icon icon-docs"></span> Item Details</a>
                                            </li>
                                            <li>
                                                <a href="#product-comment" id="tab2" aria-controls="product-comment"
                                                   role="tab"  className="active"  aria-selected="true"
                                                   data-toggle="tab" >
                                                    <span className="icon icon-bubbles"></span> Comments </a>
                                            </li>

                                            <li>
                                                <a href="#product-faq" id="tab5" aria-controls="product-faq" role="tab"
                                                   data-toggle="tab">
                                                    <span className="icon icon-question"></span> item FAQ</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-content">
                                        <div className="fade show tab-pane product-tab " id="product-details"
                                             role="tabpanel"
                                             aria-labelledby="tab1">
                                            <div className="tab-content-wrapper">
                                                <h3>Landing Page Details</h3>
                                                <p className="p-bottom-30">Nunc placerat mi id nisi interdum mollis.
                                                    Praesent pharetra, justo ut scelerisque the
                                                    mattis, leo quam aliquet congue placerat mi id nisi interdum mollis.
                                                    Praesent
                                                    pharetra,
                                                    justo ut scel erisque the mattis, leo quam aliquet congue justo ut
                                                    scelerisque.
                                                    Praesent
                                                    pharetra, justo ut scelerisque the mattis, leo quam aliquet congue
                                                    justo ut
                                                    scelerisque.</p>

                                                <h3>Features With HTML List Unordered:</h3>
                                                <ul>
                                                    <li>Six different themes for product slider</li>
                                                    <li>Featured products slider form selected categories.</li>
                                                    <li>Product slider form specific categories of products. Include or
                                                        exclude
                                                        categories.
                                                    </li>
                                                    <li>Product slider form specific tags of products. Include or
                                                        exclude tags. New
                                                    </li>
                                                </ul>

                                                <h3>Features With HTML List Ordered:</h3>
                                                <ol>
                                                    <li>Six different themes for product slider</li>
                                                    <li>Featured products slider form selected categories.</li>
                                                    <li>Product slider form specific categories of products. Include or
                                                        exclude
                                                        categories.
                                                    </li>
                                                    <li>Product slider form specific tags of products. Include or
                                                        exclude tags. New
                                                    </li>
                                                </ol>


                                                <h3>Features With Image:</h3>
                                                <img src="img/f-image-big.jpg"
                                                     alt="This is product description thumbnail"/>
                                            </div>
                                        </div>


                                        <div className="fade show tab-pane product-tab active" id="product-comment" role="tabpanel"
                                             aria-labelledby="tab2">
                                            <div className="thread">
                                                {this.props.location.state.comments.map(comment=>(
                                                <ul className="media-list thread-list">


                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m1}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <div>
                                                                    <div className="media-heading">
                                                                        <a href="author.html">
                                                                            <h4>{comment[2]}</h4>
                                                                        </a>
                                                                        <span>{comment[1]}</span>
                                                                    </div>
                                                                    <span className="comment-tag buyer">Purchased</span>
                                                                    <a href="#reply" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>{comment[0]} </p>
                                                            </div>
                                                        </div>


                                                        <ul className="children">
                                                            <li className="single-thread depth-2">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <a href="#">
                                                                            <img className="media-object"
                                                                                 src={m2}
                                                                                 alt="Commentator Avatar"/>
                                                                        </a>
                                                                    </div>
                                                                    <div className="media-body">
                                                                        <div className="media-heading">
                                                                            <h4>AazzTech</h4>
                                                                            <span>6 Hours Ago</span>
                                                                        </div>
                                                                        <span
                                                                            className="comment-tag author">Author</span>
                                                                        <p>Nunc placerat mi id nisi interdum mollis.
                                                                            Praesent pharetra,
                                                                            justo ut sceleris que the mattis, leo quam
                                                                            aliquet congue
                                                                            placerat mi id nisi interdum mollis. </p>
                                                                    </div>
                                                                </div>

                                                            </li>
                                                        </ul>


                                                        <div className="media depth-2 reply-comment">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <form action="#reply" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                                    <button className="btn btn--md btn-primary">Post
                                                                        Comment
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </li>





                                                </ul>

                                                        ))}


                                                <div className="comment-form-area">
                                                    <h4>Leave a comment</h4>


                                                    <div className="media comment-form">
                                                        <div className="media-left">
                                                            <a href="#">
                                                                <img className="media-object" src={m7}
                                                                     alt="Commentator Avatar"/>
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <form action="#" className="comment-reply-form">
                                                <textarea name="reply-comment"
                                                          placeholder="Write your comment..."></textarea>
                                                                <button className="btn btn--sm btn-primary" onClick={this.handleComment()}>Post
                                                                    Comment
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                        <div className="fade tab-pane product-tab" id="product-review" role="tabpanel"
                                             aria-labelledby="tab3">
                                            <div className="thread thread_review">
                                                <ul className="media-list thread-list">


                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m1}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="clearfix">
                                                                    <div className="pull-left">
                                                                        <div className="media-heading">
                                                                            <a href="author.html">
                                                                                <h4>Themexylum</h4>
                                                                            </a>
                                                                            <span>9 Hours Ago</span>
                                                                        </div>
                                                                        <div className="rating product--rating">
                                                                            <ul>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span
                                                                                    className="fa fa-star-half-o"></span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span className="review_tag">Support</span>
                                                                    </div>
                                                                    <a href="#" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                                    pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue
                                                                    placerat.</p>
                                                            </div>
                                                        </div>


                                                        <div className="media depth-2 reply-comment">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                                    <button className="btn btn--md btn-primary">Post
                                                                        Comment
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>

                                                    </li>



                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>

                                                            <div className="media-body">
                                                                <div className="clearfix">
                                                                    <div className="pull-left">
                                                                        <div className="media-heading">
                                                                            <a href="author.html">
                                                                                <h4>EcoTheme</h4>
                                                                            </a>
                                                                            <span>12 Hours Ago</span>
                                                                        </div>
                                                                        <div className="rating product--rating">
                                                                            <ul>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span
                                                                                    className="fa fa-star-half-o"></span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span
                                                                            className="review_tag">Customizability</span>
                                                                    </div>
                                                                    <a href="#" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                                    pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue
                                                                    placerat.</p>
                                                            </div>
                                                        </div>


                                                        <div className="media depth-2 reply-comment">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                                    <button className="btn btn--md btn-primary">Post
                                                                        Comment
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </li>


                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m3}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>

                                                            <div className="media-body">
                                                                <div className="clearfix">
                                                                    <div className="pull-left">
                                                                        <div className="media-heading">
                                                                            <a href="author.html">
                                                                                <h4>SnzTheme</h4>
                                                                            </a>
                                                                            <span>1 Day Ago</span>
                                                                        </div>
                                                                        <div className="rating product--rating">
                                                                            <ul>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span
                                                                                    className="fa fa-star-half-o"></span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span
                                                                            className="review_tag">Degin Quality</span>
                                                                    </div>
                                                                    <a href="#" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                                    pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue
                                                                    placerat.</p>
                                                            </div>
                                                        </div>


                                                        <div className="media depth-2 reply-comment">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                                    <button className="btn btn--md btn-primary">Post
                                                                        Comment
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </li>


                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m4}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="clearfix">
                                                                    <div className="pull-left">
                                                                        <div className="media-heading">
                                                                            <a href="author.html">
                                                                                <h4>ThemeValley</h4>
                                                                            </a>
                                                                            <span>20 Days Ago</span>
                                                                        </div>
                                                                        <div className="rating product--rating">
                                                                            <ul>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span
                                                                                    className="fa fa-star-half-o"></span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span className="review_tag">Others</span>
                                                                    </div>
                                                                    <a href="#" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                                    pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue
                                                                    placerat.</p>
                                                            </div>
                                                        </div>


                                                        <div className="media depth-2 reply-comment">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                                    <button className="btn btn--md btn-primary">Post
                                                                        Comment
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </li>


                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m5}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="clearfix">
                                                                    <div className="pull-left">
                                                                        <div className="media-heading">
                                                                            <a href="author.html">
                                                                                <h4>AazzTech</h4>
                                                                            </a>
                                                                            <span>1 Month Ago</span>
                                                                        </div>
                                                                        <div className="rating product--rating">
                                                                            <ul>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span
                                                                                    className="fa fa-star-half-o"></span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span className="review_tag">Features</span>
                                                                    </div>
                                                                    <a href="#" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                                    pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue
                                                                    placerat.</p>
                                                            </div>
                                                        </div>


                                                        <div className="media depth-2 reply-comment">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                                    <button className="btn btn--md btn-primary">Post
                                                                        Comment
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </li>


                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m1}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>

                                                            <div className="media-body">
                                                                <div className="clearfix">
                                                                    <div className="pull-left">
                                                                        <div className="media-heading">
                                                                            <a href="author.html">
                                                                                <h4>Jhon Smith</h4>
                                                                            </a>
                                                                            <span>1 Month Ago</span>
                                                                        </div>
                                                                        <div className="rating product--rating">
                                                                            <ul>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span
                                                                                    className="fa fa-star-half-o"></span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span className="review_tag">Code Quality</span>
                                                                    </div>
                                                                    <a href="#" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                                    pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue
                                                                    placerat.</p>
                                                            </div>
                                                        </div>



                                                    </li>


                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>

                                                            <div className="media-body">
                                                                <div className="clearfix">
                                                                    <div className="pull-left">
                                                                        <div className="media-heading">
                                                                            <a href="author.html">
                                                                                <h4>Stephen George</h4>
                                                                            </a>
                                                                            <span>2 Month Ago</span>
                                                                        </div>
                                                                        <div className="rating product--rating">
                                                                            <ul>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span
                                                                                    className="fa fa-star-half-o"></span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span className="review_tag">Support</span>
                                                                    </div>
                                                                    <a href="#" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                                    pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue
                                                                    placerat.</p>
                                                            </div>
                                                        </div>


                                                        <div className="media depth-2 reply-comment">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                                    <button className="btn btn--md btn-primary">Post
                                                                        Comment
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </li>


                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m3}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>

                                                            <div className="media-body">
                                                                <div className="clearfix">
                                                                    <div className="pull-left">
                                                                        <div className="media-heading">
                                                                            <a href="author.html">
                                                                                <h4>ThemeShpe</h4>
                                                                            </a>
                                                                            <span>3 Month Ago</span>
                                                                        </div>
                                                                        <div className="rating product--rating">
                                                                            <ul>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span
                                                                                    className="fa fa-star-half-o"></span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span className="review_tag">Others</span>
                                                                    </div>
                                                                    <a href="#" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                                    pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue
                                                                    placerat.</p>
                                                            </div>
                                                        </div>


                                                        <div className="media depth-2 reply-comment">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                                    <button className="btn btn--md btn-primary">Post
                                                                        Comment
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </li>


                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m4}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="clearfix">
                                                                    <div className="pull-left">
                                                                        <div className="media-heading">
                                                                            <a href="author.html">
                                                                                <h4>WeBake</h4>
                                                                            </a>
                                                                            <span>6 Month Ago</span>
                                                                        </div>
                                                                        <div className="rating product--rating">
                                                                            <ul>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span
                                                                                    className="fa fa-star-half-o"></span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span
                                                                            className="review_tag">Design Quality</span>
                                                                    </div>
                                                                    <a href="#" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                                    pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue
                                                                    placerat.</p>
                                                            </div>
                                                        </div>


                                                        <div className="media depth-2 reply-comment">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m2}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                                    <button className="btn btn--md btn-primary">Post
                                                                        Comment
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </li>


                                                    <li className="single-thread">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="#">
                                                                    <img className="media-object" src={m5}
                                                                         alt="Commentator Avatar"/>
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="clearfix">
                                                                    <div className="pull-left">
                                                                        <div className="media-heading">
                                                                            <a href="author.html">
                                                                                <h4>WPPlugin</h4>
                                                                            </a>
                                                                            <span>8 Month Ago</span>
                                                                        </div>
                                                                        <div className="rating product--rating">
                                                                            <ul>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span className="fa fa-star"></span>
                                                                                </li>
                                                                                <li><span
                                                                                    className="fa fa-star-half-o"></span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span className="review_tag">Support</span>
                                                                    </div>
                                                                    <a href="#" className="reply-link">Reply</a>
                                                                </div>
                                                                <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                                    pharetra, justo ut
                                                                    sceleris que the mattis, leo quam aliquet congue
                                                                    placerat.</p>
                                                            </div>
                                                        </div>

                                                    </li>


                                                </ul>


                                                <nav className="pagination-default">
                                                    <ul className="pagination">
                                                        <li className="page-item">
                                                            <a className="page-link" href="#" aria-label="Previous">
                                                                <span aria-hidden="true"><i
                                                                    className="fa fa-long-arrow-left"></i></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item active"><a className="page-link"
                                                                                            href="#">1</a></li>
                                                        <li className="page-item"><a className="page-link"
                                                                                     href="#">2</a></li>
                                                        <li className="page-item"><a className="page-link"
                                                                                     href="#">3</a></li>
                                                        <li className="page-item disabled"><a className="page-link"
                                                                                              href="#">...</a></li>
                                                        <li className="page-item"><a className="page-link"
                                                                                     href="#">10</a></li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#" aria-label="Next">
                                                                <span aria-hidden="true"><i
                                                                    className="fa fa-long-arrow-right"></i></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>

                                            </div>
                                        </div>

                                        <div className="fade tab-pane product-tab" id="product-support" role="tabpanel"
                                             aria-labelledby="tab4">
                                            <div className="support">
                                                <div className="support__title">
                                                    <h3>Contact the Author</h3>
                                                </div>
                                                <div className="support__form">
                                                    <div className="usr-msg">
                                                        <p>Please
                                                            <a href="login.html">sign in</a> to contact this author.</p>

                                                        <form action="#" className="support_form">
                                                            <div className="form-group">
                                                                <label htmlFor="subj">Support Subject:</label>
                                                                <input type="text" id="subj" className="text_field"
                                                                       placeholder="Enter your subject"/>
                                                            </div>

                                                            <div className="form-group">
                                                                <label htmlFor="supmsg">Support Query: </label>
                                                                <textarea className="text_field" id="supmsg"
                                                                          name="supmsg"
                                                                          placeholder="Enter your text..."></textarea>
                                                            </div>
                                                            <button type="submit"
                                                                    className="btn btn--lg btn-primary">Submit Now
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="fade tab-pane product-tab" id="product-faq" role="tabpanel"
                                             aria-labelledby="tab5">
                                            <div className="tab-content-wrapper">

                                                <div className="faq-accordion">
                                                    <div className="panel-group accordion" role="tablist"
                                                         id="accordion">
                                                        <div className="panel accordion__single" id="panel-one">
                                                            <div className="single_acco_title">
                                                                <h4>
                                                                    <a data-toggle="collapse" href="#collapse1"
                                                                       className="collapsed"
                                                                       aria-expanded="false" data-target="#collapse1"
                                                                       aria-controls="collapse1">
                                                                        <span>How to write the changelog for theme updates?</span>
                                                                        <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                    </a>
                                                                </h4>
                                                            </div>

                                                            <div id="collapse1" className="panel-collapse collapse"
                                                                 aria-labelledby="panel-one"
                                                                 data-parent="#accordion">
                                                                <div className="panel-body">
                                                                    <p>Nunc placerat mi id nisi interdum mollis.
                                                                        Praesent pharetra, justo ut
                                                                        sceleris que the mattis, leo quam aliquet congue
                                                                        placerat mi id nisi
                                                                        interdum mollis. Aliquip placeat salvia cillum
                                                                        iphone. Seitan
                                                                        aliquip
                                                                        quis cardigan american apparel, butcher. Nunc
                                                                        placerat mi id nisi
                                                                        interdum mollis. Praesent pharetra, justo ut
                                                                        sceleris que the
                                                                        mattis,
                                                                        leo quam aliquet congue placerat mi id nisi
                                                                        interdum mollis. Aliquip
                                                                        placeat salvia cillum iphone. Seitan aliquip
                                                                        quis cardigan american
                                                                        apparel, butcher .</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="panel accordion__single" id="panel-two">
                                                            <div className="single_acco_title">
                                                                <h4>
                                                                    <a data-toggle="collapse" href="#collapse2"
                                                                       className="collapsed"
                                                                       aria-expanded="false" data-target="#collapse2"
                                                                       aria-controls="collapse2">
                                                                        <span>Why do I need to login to purchase an item on DigiPro?</span>
                                                                        <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                    </a>
                                                                </h4>
                                                            </div>

                                                            <div id="collapse2" className="panel-collapse collapse"
                                                                 aria-labelledby="panel-two"
                                                                 data-parent="#accordion">
                                                                <div className="panel-body">
                                                                    <p>Nunc placerat mi id nisi interdum mollis.
                                                                        Praesent pharetra, justo ut
                                                                        sceleris que the mattis, leo quam aliquet congue
                                                                        placerat mi id nisi
                                                                        interdum mollis. Aliquip placeat salvia cillum
                                                                        iphone. Seitan
                                                                        aliquip
                                                                        quis cardigan american apparel, butcher. Nunc
                                                                        placerat mi id nisi
                                                                        interdum mollis. Praesent pharetra, justo ut
                                                                        sceleris que the
                                                                        mattis,
                                                                        leo quam aliquet congue placerat mi id nisi
                                                                        interdum mollis. Aliquip
                                                                        placeat salvia cillum iphone. Seitan aliquip
                                                                        quis cardigan american
                                                                        apparel, butcher .</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="panel accordion__single" id="panel-three">
                                                            <div className="single_acco_title">
                                                                <h4>
                                                                    <a data-toggle="collapse" href="#collapse3"
                                                                       className="collapsed"
                                                                       aria-expanded="false" data-target="#collapse3"
                                                                       aria-controls="collapse3">
                                                                        <span>How to create an account on DigiPro?</span>
                                                                        <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                    </a>
                                                                </h4>
                                                            </div>

                                                            <div id="collapse3" className="panel-collapse collapse"
                                                                 aria-labelledby="panel-three" data-parent="#accordion">
                                                                <div className="panel-body">
                                                                    <p>Nunc placerat mi id nisi interdum mollis.
                                                                        Praesent pharetra, justo ut
                                                                        sceleris que the mattis, leo quam aliquet congue
                                                                        placerat mi id nisi
                                                                        interdum mollis. Aliquip placeat salvia cillum
                                                                        iphone. Seitan
                                                                        aliquip
                                                                        quis cardigan american apparel, butcher. Nunc
                                                                        placerat mi id nisi
                                                                        interdum mollis. Praesent pharetra, justo ut
                                                                        sceleris que the
                                                                        mattis,
                                                                        leo quam aliquet congue placerat mi id nisi
                                                                        interdum mollis. Aliquip
                                                                        placeat salvia cillum iphone. Seitan aliquip
                                                                        quis cardigan american
                                                                        apparel, butcher .</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="panel accordion__single" id="panel-four">
                                                            <div className="single_acco_title">
                                                                <h4>
                                                                    <a data-toggle="collapse" href="#collapse4"
                                                                       className="collapsed"
                                                                       aria-expanded="false" data-target="#collapse4"
                                                                       aria-controls="collapse4">
                                                                        <span>How to write the changelog for theme updates?</span>
                                                                        <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                    </a>
                                                                </h4>
                                                            </div>

                                                            <div id="collapse4" className="panel-collapse collapse"
                                                                 aria-labelledby="panel-four"
                                                                 data-parent="#accordion">
                                                                <div className="panel-body">
                                                                    <p>Nunc placerat mi id nisi interdum mollis.
                                                                        Praesent pharetra, justo ut
                                                                        sceleris que the mattis, leo quam aliquet congue
                                                                        placerat mi id nisi
                                                                        interdum mollis. Aliquip placeat salvia cillum
                                                                        iphone. Seitan
                                                                        aliquip
                                                                        quis cardigan american apparel, butcher. Nunc
                                                                        placerat mi id nisi
                                                                        interdum mollis. Praesent pharetra, justo ut
                                                                        sceleris que the
                                                                        mattis,
                                                                        leo quam aliquet congue placerat mi id nisi
                                                                        interdum mollis. Aliquip
                                                                        placeat salvia cillum iphone. Seitan aliquip
                                                                        quis cardigan american
                                                                        apparel, butcher .</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="panel accordion__single" id="panel-five">
                                                            <div className="single_acco_title">
                                                                <h4>
                                                                    <a data-toggle="collapse" href="#collapse5"
                                                                       className="collapsed"
                                                                       aria-expanded="false" data-target="#collapse5"
                                                                       aria-controls="collapse5">
                                                                        <span>Do you recommend using a download manager software?</span>
                                                                        <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                    </a>
                                                                </h4>
                                                            </div>

                                                            <div id="collapse5" className="panel-collapse collapse"
                                                                 aria-labelledby="panel-five"
                                                                 data-parent="#accordion">
                                                                <div className="panel-body">
                                                                    <p>Nunc placerat mi id nisi interdum mollis.
                                                                        Praesent pharetra, justo ut
                                                                        sceleris que the mattis, leo quam aliquet congue
                                                                        placerat mi id nisi
                                                                        interdum mollis. Aliquip placeat salvia cillum
                                                                        iphone. Seitan
                                                                        aliquip
                                                                        quis cardigan american apparel, butcher. Nunc
                                                                        placerat mi id nisi
                                                                        interdum mollis. Praesent pharetra, justo ut
                                                                        sceleris que the
                                                                        mattis,
                                                                        leo quam aliquet congue placerat mi id nisi
                                                                        interdum mollis. Aliquip
                                                                        placeat salvia cillum iphone. Seitan aliquip
                                                                        quis cardigan american
                                                                        apparel, butcher .</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="panel accordion__single" id="panel-six">
                                                            <div className="single_acco_title">
                                                                <h4>
                                                                    <a data-toggle="collapse" href="#collapse6"
                                                                       className="collapsed"
                                                                       aria-expanded="false" data-target="#collapse6"
                                                                       aria-controls="collapse6">
                                                                        <span>How to purchase an item on DigiPro?</span>
                                                                        <i className="lnr icon-arrow-right-circle indicator"></i>
                                                                    </a>
                                                                </h4>
                                                            </div>

                                                            <div id="collapse6" className="panel-collapse collapse"
                                                                 aria-labelledby="panel-six"
                                                                 data-parent="#accordion">
                                                                <div className="panel-body">
                                                                    <p>Nunc placerat mi id nisi interdum mollis.
                                                                        Praesent pharetra, justo ut
                                                                        sceleris que the mattis, leo quam aliquet congue
                                                                        placerat mi id nisi
                                                                        interdum mollis. Aliquip placeat salvia cillum
                                                                        iphone. Seitan
                                                                        aliquip
                                                                        quis cardigan american apparel, butcher. Nunc
                                                                        placerat mi id nisi
                                                                        interdum mollis. Praesent pharetra, justo ut
                                                                        sceleris que the
                                                                        mattis,
                                                                        leo quam aliquet congue placerat mi id nisi
                                                                        interdum mollis. Aliquip
                                                                        placeat salvia cillum iphone. Seitan aliquip
                                                                        quis cardigan american
                                                                        apparel, butcher .</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <aside className="sidebar sidebar--single-product">




                                    <div className="sidebar-card card--product-infos">
                                        <div className="card-title">
                                            <h4>Product Information</h4>
                                        </div>

                                        <ul className="infos">
                                            <li>
                                                <p className="data-label"><b> Name</b></p>
                                                <p className="info">{this.state.title}</p>
                                            </li>
                                            <li>
                                                <p className="data-label"><b> Released</b></p>
                                                <p className="info">{this.state.date_delivary}</p>
                                            </li>
                                            <li>
                                                <p className="data-label"><b>Updated</b></p>
                                                <p className="info">{this.state.date_update} </p>
                                            </li>
                                            <li>
                                                  <p className="data-label"><b>Version</b></p>
                                                <p className="info">{this.state.version}</p>
                                            </li>
                                            <li>
                                                <p className="data-label"><b> Category</b></p>
                                                <p className="info">{this.state.category}</p>
                                            </li>
                                            <li>
                                                <p className="data-label"><b> Description</b></p>
                                                <p className="info">{this.state.description}</p>
                                            </li>
                                            <li>
                                                 <p className="data-label"><b> Files Included</b></p>
                                                <p className="info">Html, CSS, JavaScript</p>
                                            </li>
                                            <li>
                                               <p className="data-label"><b>Browser</b></p>
                                                <p className="info">IE10, IE11, Firefox, Safari, Opera, Chrome5</p>
                                            </li>


                                            <li>
                                                <div className="author-btn">
                                                    <a href="#" className="btn btn--sm btn-secondary" href="mailto:support@vermeg.com">Email Us</a>

                                                </div>

                                            </li>
                                        </ul>
                                    </div>


                                    <div className="sidebar-card social-share-card">
                                        <p>Social Share:</p>
                                        <div className="social social--color--filled">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-facebook"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-twitter"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-linkedin"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="fa fa-google-plus"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>




                                </aside>
                            </div>
                        </div>
                    </div>
                </section>



            </div>


        );}
else {
    return (
        <div>
            <Header navv="user"/>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb-contents">
                                <h2 className="page-title">DigiPro Multipurpose Marketplace HTML Template</h2>
                                <div className="breadcrumb">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Single Product</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="single-product-desc">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="item-preview">
                                {(() => {
                                    if (this.state.path==="solife.png") {
                                        return (
                                            <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/solife.png`)} alt="" className="img-fluid"/>
                                        )
                                    } else if (this.state.path==="megara.png") {
                                        return (
                                            <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/megara.png`)} alt="" className="img-fluid"/>
                                        )
                                    }   else if (this.state.path==="agile.png") {
                                        return (
                                            <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/agile.png`)} alt="" className="img-fluid"/>
                                        )
                                    }  else if (this.state.path==="colline.png") {
                                        return (
                                            <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/colline.png`)} alt="" className="img-fluid"/>
                                        )
                                    }  else if (this.state.path==="massai.png") {
                                        return (
                                            <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/massai.png`)} alt="" className="img-fluid"/>
                                        )
                                    }
                                    else if (this.state.path==="palmyra.png") {
                                        return (
                                            <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/palmyra.png`)} alt="" className="img-fluid"/>
                                        )
                                    } else {
                                        return (
                                            <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/soliam.png`)} alt="" className="img-fluid"/>
                                        )
                                    }
                                })()}

                                <div className="item-preview--excerpt">

                                    <div className="item-preview--action">
                                        <div className="action-btns">
                                            <a href="#" className="btn btn--lg btn-primary">Live Preview</a>
                                            <a href="#" className="btn btn--lg btn--icon btn-outline-primary">
                                                <span className="lnr icon-heart"></span>Add To Favorites</a>
                                        </div>
                                    </div>


                                    <div className="item-preview--activity">
                                        <div className="activity-single">
                                            <p>
                                                <span className="icon-basket"></span> Total Sales
                                            </p>
                                            <p>2451</p>
                                        </div>
                                        <div className="activity-single">
                                            <p>
                                                <span className="icon-star"></span> Reviews
                                            </p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </li>
                                                <li>(35)</li>
                                            </ul>
                                        </div>
                                        <div className="activity-single">
                                            <p>
                                                <span className="icon-heart"></span>Favorities
                                            </p>
                                            <p>425</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="item-info">
                                <div className="item-navigation">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li>
                                            <a href="#product-details"  id="tab1"
                                               aria-controls="product-details" className="active"  aria-selected="true"
                                               role="tab" data-toggle="tab" >
                                                <span className="icon icon-docs"></span> Item Details</a>
                                        </li>
                                        <li>
                                            <a href="#product-comment" id="tab2" aria-controls="product-comment"
                                               role="tab"  className="active"  aria-selected="true"
                                               data-toggle="tab" >
                                                <span className="icon icon-bubbles"></span> Comments </a>
                                        </li>

                                        <li>
                                            <a href="#product-faq" id="tab5" aria-controls="product-faq" role="tab"
                                               data-toggle="tab">
                                                <span className="icon icon-question"></span> item FAQ</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content">
                                    <div className="fade show tab-pane product-tab " id="product-details"
                                         role="tabpanel"
                                         aria-labelledby="tab1">
                                        <div className="tab-content-wrapper">
                                            <h3>Landing Page Details</h3>
                                            <p className="p-bottom-30">Nunc placerat mi id nisi interdum mollis.
                                                Praesent pharetra, justo ut scelerisque the
                                                mattis, leo quam aliquet congue placerat mi id nisi interdum mollis.
                                                Praesent
                                                pharetra,
                                                justo ut scel erisque the mattis, leo quam aliquet congue justo ut
                                                scelerisque.
                                                Praesent
                                                pharetra, justo ut scelerisque the mattis, leo quam aliquet congue
                                                justo ut
                                                scelerisque.</p>

                                            <h3>Features With HTML List Unordered:</h3>
                                            <ul>
                                                <li>Six different themes for product slider</li>
                                                <li>Featured products slider form selected categories.</li>
                                                <li>Product slider form specific categories of products. Include or
                                                    exclude
                                                    categories.
                                                </li>
                                                <li>Product slider form specific tags of products. Include or
                                                    exclude tags. New
                                                </li>
                                            </ul>

                                            <h3>Features With HTML List Ordered:</h3>
                                            <ol>
                                                <li>Six different themes for product slider</li>
                                                <li>Featured products slider form selected categories.</li>
                                                <li>Product slider form specific categories of products. Include or
                                                    exclude
                                                    categories.
                                                </li>
                                                <li>Product slider form specific tags of products. Include or
                                                    exclude tags. New
                                                </li>
                                            </ol>


                                            <h3>Features With Image:</h3>
                                            <img src="img/f-image-big.jpg"
                                                 alt="This is product description thumbnail"/>
                                        </div>
                                    </div>


                                    <div className="fade show tab-pane product-tab active" id="product-comment" role="tabpanel"
                                         aria-labelledby="tab2">
                                        <div className="thread">


                                            <div className="comment-form-area">
                                                <h4>Leave a comment</h4>


                                                <div className="media comment-form">
                                                    <div className="media-left">
                                                        <a href="#">
                                                            <img className="media-object" src={m7}
                                                                 alt="Commentator Avatar"/>
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <form action="#" className="comment-reply-form">
                                                <textarea name="reply-comment"
                                                          placeholder="Write your comment..."></textarea>
                                                            <button className="btn btn--sm btn-primary" onClick={this.handleComment()}>Post
                                                                Comment
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>


                                    <div className="media depth-2 reply-comment">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m2}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                <button className="btn btn--md btn-primary">Post
                                                    Comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                               <ul>



                                <li className="single-thread">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m2}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>

                                        <div className="media-body">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="media-heading">
                                                        <a href="author.html">
                                                            <h4>EcoTheme</h4>
                                                        </a>
                                                        <span>12 Hours Ago</span>
                                                    </div>
                                                    <div className="rating product--rating">
                                                        <ul>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span
                                                                className="fa fa-star-half-o"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span
                                                        className="review_tag">Customizability</span>
                                                </div>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                pharetra, justo ut
                                                sceleris que the mattis, leo quam aliquet congue
                                                placerat.</p>
                                        </div>
                                    </div>


                                    <div className="media depth-2 reply-comment">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m2}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                <button className="btn btn--md btn-primary">Post
                                                    Comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </li>


                                <li className="single-thread">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m3}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>

                                        <div className="media-body">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="media-heading">
                                                        <a href="author.html">
                                                            <h4>SnzTheme</h4>
                                                        </a>
                                                        <span>1 Day Ago</span>
                                                    </div>
                                                    <div className="rating product--rating">
                                                        <ul>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span
                                                                className="fa fa-star-half-o"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span
                                                        className="review_tag">Degin Quality</span>
                                                </div>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                pharetra, justo ut
                                                sceleris que the mattis, leo quam aliquet congue
                                                placerat.</p>
                                        </div>
                                    </div>


                                    <div className="media depth-2 reply-comment">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m2}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                <button className="btn btn--md btn-primary">Post
                                                    Comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </li>


                                <li className="single-thread">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m4}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="media-heading">
                                                        <a href="author.html">
                                                            <h4>ThemeValley</h4>
                                                        </a>
                                                        <span>20 Days Ago</span>
                                                    </div>
                                                    <div className="rating product--rating">
                                                        <ul>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span
                                                                className="fa fa-star-half-o"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className="review_tag">Others</span>
                                                </div>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                pharetra, justo ut
                                                sceleris que the mattis, leo quam aliquet congue
                                                placerat.</p>
                                        </div>
                                    </div>


                                    <div className="media depth-2 reply-comment">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m2}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                <button className="btn btn--md btn-primary">Post
                                                    Comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </li>


                                <li className="single-thread">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m5}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="media-heading">
                                                        <a href="author.html">
                                                            <h4>AazzTech</h4>
                                                        </a>
                                                        <span>1 Month Ago</span>
                                                    </div>
                                                    <div className="rating product--rating">
                                                        <ul>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span
                                                                className="fa fa-star-half-o"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className="review_tag">Features</span>
                                                </div>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                pharetra, justo ut
                                                sceleris que the mattis, leo quam aliquet congue
                                                placerat.</p>
                                        </div>
                                    </div>


                                    <div className="media depth-2 reply-comment">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m2}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                <button className="btn btn--md btn-primary">Post
                                                    Comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </li>


                                <li className="single-thread">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m1}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>

                                        <div className="media-body">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="media-heading">
                                                        <a href="author.html">
                                                            <h4>Jhon Smith</h4>
                                                        </a>
                                                        <span>1 Month Ago</span>
                                                    </div>
                                                    <div className="rating product--rating">
                                                        <ul>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span
                                                                className="fa fa-star-half-o"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className="review_tag">Code Quality</span>
                                                </div>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                pharetra, justo ut
                                                sceleris que the mattis, leo quam aliquet congue
                                                placerat.</p>
                                        </div>
                                    </div>



                                </li>


                                <li className="single-thread">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m2}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>

                                        <div className="media-body">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="media-heading">
                                                        <a href="author.html">
                                                            <h4>Stephen George</h4>
                                                        </a>
                                                        <span>2 Month Ago</span>
                                                    </div>
                                                    <div className="rating product--rating">
                                                        <ul>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span
                                                                className="fa fa-star-half-o"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className="review_tag">Support</span>
                                                </div>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                pharetra, justo ut
                                                sceleris que the mattis, leo quam aliquet congue
                                                placerat.</p>
                                        </div>
                                    </div>


                                    <div className="media depth-2 reply-comment">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m2}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                <button className="btn btn--md btn-primary">Post
                                                    Comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </li>


                                <li className="single-thread">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m3}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>

                                        <div className="media-body">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="media-heading">
                                                        <a href="author.html">
                                                            <h4>ThemeShpe</h4>
                                                        </a>
                                                        <span>3 Month Ago</span>
                                                    </div>
                                                    <div className="rating product--rating">
                                                        <ul>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span
                                                                className="fa fa-star-half-o"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className="review_tag">Others</span>
                                                </div>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                pharetra, justo ut
                                                sceleris que the mattis, leo quam aliquet congue
                                                placerat.</p>
                                        </div>
                                    </div>


                                    <div className="media depth-2 reply-comment">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m2}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                <button className="btn btn--md btn-primary">Post
                                                    Comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </li>


                                <li className="single-thread">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m4}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="media-heading">
                                                        <a href="author.html">
                                                            <h4>WeBake</h4>
                                                        </a>
                                                        <span>6 Month Ago</span>
                                                    </div>
                                                    <div className="rating product--rating">
                                                        <ul>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span
                                                                className="fa fa-star-half-o"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span
                                                        className="review_tag">Design Quality</span>
                                                </div>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                pharetra, justo ut
                                                sceleris que the mattis, leo quam aliquet congue
                                                placerat.</p>
                                        </div>
                                    </div>


                                    <div className="media depth-2 reply-comment">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m2}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <form action="#" className="comment-reply-form">
                                                                    <textarea className="bla" name="reply-comment"
                                                                              placeholder="Write your comment..."></textarea>
                                                <button className="btn btn--md btn-primary">Post
                                                    Comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </li>


                                <li className="single-thread">
                                    <div className="media">
                                        <div className="media-left">
                                            <a href="#">
                                                <img className="media-object" src={m5}
                                                     alt="Commentator Avatar"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <div className="clearfix">
                                                <div className="pull-left">
                                                    <div className="media-heading">
                                                        <a href="author.html">
                                                            <h4>WPPlugin</h4>
                                                        </a>
                                                        <span>8 Month Ago</span>
                                                    </div>
                                                    <div className="rating product--rating">
                                                        <ul>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span className="fa fa-star"></span>
                                                            </li>
                                                            <li><span
                                                                className="fa fa-star-half-o"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <span className="review_tag">Support</span>
                                                </div>
                                                <a href="#" className="reply-link">Reply</a>
                                            </div>
                                            <p>Nunc placerat mi id nisi interdum mollis. Praesent
                                                pharetra, justo ut
                                                sceleris que the mattis, leo quam aliquet congue
                                                placerat.</p>
                                        </div>
                                    </div>

                                </li>


                            </ul>


                            <nav className="pagination-default">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="fa fa-long-arrow-left"></i></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link"
                                                                        href="#">1</a></li>
                                    <li className="page-item"><a className="page-link"
                                                                 href="#">2</a></li>
                                    <li className="page-item"><a className="page-link"
                                                                 href="#">3</a></li>
                                    <li className="page-item disabled"><a className="page-link"
                                                                          href="#">...</a></li>
                                    <li className="page-item"><a className="page-link"
                                                                 href="#">10</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                                                <span aria-hidden="true"><i
                                                                    className="fa fa-long-arrow-right"></i></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>

                    <div className="fade tab-pane product-tab" id="product-support" role="tabpanel"
                         aria-labelledby="tab4">
                        <div className="support">
                            <div className="support__title">
                                <h3>Contact the Author</h3>
                            </div>
                            <div className="support__form">
                                <div className="usr-msg">
                                    <p>Please
                                        <a href="login.html">sign in</a> to contact this author.</p>

                                    <form action="#" className="support_form">
                                        <div className="form-group">
                                            <label htmlFor="subj">Support Subject:</label>
                                            <input type="text" id="subj" className="text_field"
                                                   placeholder="Enter your subject"/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="supmsg">Support Query: </label>
                                            <textarea className="text_field" id="supmsg"
                                                      name="supmsg"
                                                      placeholder="Enter your text..."></textarea>
                                        </div>
                                        <button type="submit"
                                                className="btn btn--lg btn-primary">Submit Now
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fade tab-pane product-tab" id="product-faq" role="tabpanel"
                         aria-labelledby="tab5">
                        <div className="tab-content-wrapper">

                            <div className="faq-accordion">
                                <div className="panel-group accordion" role="tablist"
                                     id="accordion">
                                    <div className="panel accordion__single" id="panel-one">
                                        <div className="single_acco_title">
                                            <h4>
                                                <a data-toggle="collapse" href="#collapse1"
                                                   className="collapsed"
                                                   aria-expanded="false" data-target="#collapse1"
                                                   aria-controls="collapse1">
                                                    <span>How to write the changelog for theme updates?</span>
                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                </a>
                                            </h4>
                                        </div>

                                        <div id="collapse1" className="panel-collapse collapse"
                                             aria-labelledby="panel-one"
                                             data-parent="#accordion">
                                            <div className="panel-body">
                                                <p>Nunc placerat mi id nisi interdum mollis.
                                                    Praesent pharetra, justo ut
                                                    sceleris que the mattis, leo quam aliquet congue
                                                    placerat mi id nisi
                                                    interdum mollis. Aliquip placeat salvia cillum
                                                    iphone. Seitan
                                                    aliquip
                                                    quis cardigan american apparel, butcher. Nunc
                                                    placerat mi id nisi
                                                    interdum mollis. Praesent pharetra, justo ut
                                                    sceleris que the
                                                    mattis,
                                                    leo quam aliquet congue placerat mi id nisi
                                                    interdum mollis. Aliquip
                                                    placeat salvia cillum iphone. Seitan aliquip
                                                    quis cardigan american
                                                    apparel, butcher .</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel accordion__single" id="panel-two">
                                        <div className="single_acco_title">
                                            <h4>
                                                <a data-toggle="collapse" href="#collapse2"
                                                   className="collapsed"
                                                   aria-expanded="false" data-target="#collapse2"
                                                   aria-controls="collapse2">
                                                    <span>Why do I need to login to purchase an item on DigiPro?</span>
                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                </a>
                                            </h4>
                                        </div>

                                        <div id="collapse2" className="panel-collapse collapse"
                                             aria-labelledby="panel-two"
                                             data-parent="#accordion">
                                            <div className="panel-body">
                                                <p>Nunc placerat mi id nisi interdum mollis.
                                                    Praesent pharetra, justo ut
                                                    sceleris que the mattis, leo quam aliquet congue
                                                    placerat mi id nisi
                                                    interdum mollis. Aliquip placeat salvia cillum
                                                    iphone. Seitan
                                                    aliquip
                                                    quis cardigan american apparel, butcher. Nunc
                                                    placerat mi id nisi
                                                    interdum mollis. Praesent pharetra, justo ut
                                                    sceleris que the
                                                    mattis,
                                                    leo quam aliquet congue placerat mi id nisi
                                                    interdum mollis. Aliquip
                                                    placeat salvia cillum iphone. Seitan aliquip
                                                    quis cardigan american
                                                    apparel, butcher .</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel accordion__single" id="panel-three">
                                        <div className="single_acco_title">
                                            <h4>
                                                <a data-toggle="collapse" href="#collapse3"
                                                   className="collapsed"
                                                   aria-expanded="false" data-target="#collapse3"
                                                   aria-controls="collapse3">
                                                    <span>How to create an account on DigiPro?</span>
                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                </a>
                                            </h4>
                                        </div>

                                        <div id="collapse3" className="panel-collapse collapse"
                                             aria-labelledby="panel-three" data-parent="#accordion">
                                            <div className="panel-body">
                                                <p>Nunc placerat mi id nisi interdum mollis.
                                                    Praesent pharetra, justo ut
                                                    sceleris que the mattis, leo quam aliquet congue
                                                    placerat mi id nisi
                                                    interdum mollis. Aliquip placeat salvia cillum
                                                    iphone. Seitan
                                                    aliquip
                                                    quis cardigan american apparel, butcher. Nunc
                                                    placerat mi id nisi
                                                    interdum mollis. Praesent pharetra, justo ut
                                                    sceleris que the
                                                    mattis,
                                                    leo quam aliquet congue placerat mi id nisi
                                                    interdum mollis. Aliquip
                                                    placeat salvia cillum iphone. Seitan aliquip
                                                    quis cardigan american
                                                    apparel, butcher .</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel accordion__single" id="panel-four">
                                        <div className="single_acco_title">
                                            <h4>
                                                <a data-toggle="collapse" href="#collapse4"
                                                   className="collapsed"
                                                   aria-expanded="false" data-target="#collapse4"
                                                   aria-controls="collapse4">
                                                    <span>How to write the changelog for theme updates?</span>
                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                </a>
                                            </h4>
                                        </div>

                                        <div id="collapse4" className="panel-collapse collapse"
                                             aria-labelledby="panel-four"
                                             data-parent="#accordion">
                                            <div className="panel-body">
                                                <p>Nunc placerat mi id nisi interdum mollis.
                                                    Praesent pharetra, justo ut
                                                    sceleris que the mattis, leo quam aliquet congue
                                                    placerat mi id nisi
                                                    interdum mollis. Aliquip placeat salvia cillum
                                                    iphone. Seitan
                                                    aliquip
                                                    quis cardigan american apparel, butcher. Nunc
                                                    placerat mi id nisi
                                                    interdum mollis. Praesent pharetra, justo ut
                                                    sceleris que the
                                                    mattis,
                                                    leo quam aliquet congue placerat mi id nisi
                                                    interdum mollis. Aliquip
                                                    placeat salvia cillum iphone. Seitan aliquip
                                                    quis cardigan american
                                                    apparel, butcher .</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel accordion__single" id="panel-five">
                                        <div className="single_acco_title">
                                            <h4>
                                                <a data-toggle="collapse" href="#collapse5"
                                                   className="collapsed"
                                                   aria-expanded="false" data-target="#collapse5"
                                                   aria-controls="collapse5">
                                                    <span>Do you recommend using a download manager software?</span>
                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                </a>
                                            </h4>
                                        </div>

                                        <div id="collapse5" className="panel-collapse collapse"
                                             aria-labelledby="panel-five"
                                             data-parent="#accordion">
                                            <div className="panel-body">
                                                <p>Nunc placerat mi id nisi interdum mollis.
                                                    Praesent pharetra, justo ut
                                                    sceleris que the mattis, leo quam aliquet congue
                                                    placerat mi id nisi
                                                    interdum mollis. Aliquip placeat salvia cillum
                                                    iphone. Seitan
                                                    aliquip
                                                    quis cardigan american apparel, butcher. Nunc
                                                    placerat mi id nisi
                                                    interdum mollis. Praesent pharetra, justo ut
                                                    sceleris que the
                                                    mattis,
                                                    leo quam aliquet congue placerat mi id nisi
                                                    interdum mollis. Aliquip
                                                    placeat salvia cillum iphone. Seitan aliquip
                                                    quis cardigan american
                                                    apparel, butcher .</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel accordion__single" id="panel-six">
                                        <div className="single_acco_title">
                                            <h4>
                                                <a data-toggle="collapse" href="#collapse6"
                                                   className="collapsed"
                                                   aria-expanded="false" data-target="#collapse6"
                                                   aria-controls="collapse6">
                                                    <span>How to purchase an item on DigiPro?</span>
                                                    <i className="lnr icon-arrow-right-circle indicator"></i>
                                                </a>
                                            </h4>
                                        </div>

                                        <div id="collapse6" className="panel-collapse collapse"
                                             aria-labelledby="panel-six"
                                             data-parent="#accordion">
                                            <div className="panel-body">
                                                <p>Nunc placerat mi id nisi interdum mollis.
                                                    Praesent pharetra, justo ut
                                                    sceleris que the mattis, leo quam aliquet congue
                                                    placerat mi id nisi
                                                    interdum mollis. Aliquip placeat salvia cillum
                                                    iphone. Seitan
                                                    aliquip
                                                    quis cardigan american apparel, butcher. Nunc
                                                    placerat mi id nisi
                                                    interdum mollis. Praesent pharetra, justo ut
                                                    sceleris que the
                                                    mattis,
                                                    leo quam aliquet congue placerat mi id nisi
                                                    interdum mollis. Aliquip
                                                    placeat salvia cillum iphone. Seitan aliquip
                                                    quis cardigan american
                                                    apparel, butcher .</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


<div className="col-lg-4 col-md-12">
        <aside className="sidebar sidebar--single-product">




        <div className="sidebar-card card--product-infos">
        <div className="card-title">
        <h4>Product Information</h4>
</div>
            <div>

<ul className="infos">
<li>
<p className="data-label"><b> Name</b></p>
<p className="info">{this.state.title}</p>
</li>
<li>
<p className="data-label"><b> Released</b></p>
<p className="info">{this.state.date_delivary}</p>
</li>
<li>
<p className="data-label"><b>Updated</b></p>
<p className="info">{this.state.date_update} </p>
</li>
<li>
<p className="data-label"><b>Version</b></p>
<p className="info">{this.state.version}</p>
</li>
<li>
<p className="data-label"><b> Category</b></p>
<p className="info">{this.state.category}</p>
</li>
<li>
<p className="data-label"><b> Description</b></p>
<p className="info">{this.state.description}</p>
</li>
<li>
<p className="data-label"><b> Files Included</b></p>
<p className="info">Html, CSS, JavaScript</p>
</li>
<li>
<p className="data-label"><b>Browser</b></p>
<p className="info">IE10, IE11, Firefox, Safari, Opera, Chrome5</p>
</li>


<li>
<div className="author-btn">
<a href="#" className="btn btn--sm btn-secondary" href="mailto:support@vermeg.com">Email Us</a>

</div>

</li>
</ul>
</div>


<div className="sidebar-card social-share-card">
<p>Social Share:</p>
<div className="social social--color--filled">
<ul>
<li>
<a href="#">
<span className="fa fa-facebook"></span>
</a>
</li>
<li>
<a href="#">
<span className="fa fa-twitter"></span>
</a>
</li>
<li>
<a href="#">
<span className="fa fa-linkedin"></span>
</a>
</li>
<li>
<a href="#">
<span className="fa fa-google-plus"></span>
</a>
</li>
</ul>
</div>
</div>



</div>
</aside>
</div></div></div></section></div>

)

}
    }
}

export default ProductDetail;
