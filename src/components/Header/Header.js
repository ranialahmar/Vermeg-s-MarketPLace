import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, NavLink, Redirect} from 'react-router-dom';
import "/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Header/sty.css";
import log from "/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/logo.png";
import usr from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/user-avater.png'
import not from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/user-avater.png'
import not2 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/notification_head2.png'
import not3 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/notification_head3.png'
import not4 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/notification_head4.png'
import not5 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/notification_head5.png'
import cap from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/capro1.jpg'
import cap2 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/capro2.jpg'
import co from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/catword.png'
class Header extends Component {

    state={
        redirect:false,
        red:false
    }



    handleClick =() =>{
        this.setState({redirect:true});

    }
    handleClick2 =() =>{
        this.setState({red:true});

    }


    render() {
 const { redirect ,red}= this.state
        if(redirect){
            return ( <Redirect  to={{
                    pathname: '/login'
                }}/>
            ) }
        if(red){
            return ( <Redirect  to={{
                    pathname: '/register'
                }}/>
            ) }
        else if( this.props.navv === "true"){
            return(
                <div className="menu-area">
                    <div className="top-menu-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="menu-fullwidth">
                                        <div className="logo-wrapper">
                                            <div className="logo logo-top">
                                                <Link to="/products"><img src={log} alt="logo image"
                                                                          className="img-fluid"/></Link>
                                            </div>
                                        </div>

                                        <div className="menu-container">
                                            <div className="d_menu">

                                                <nav className="navbar navbar-expand-lg mainmenu__menu">
                                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                            data-target="#bs-example-navbar-collapse-1"
                                                            aria-controls="bs-example-navbar-collapse-1"
                                                            aria-expanded="false" aria-label="Toggle navigation">
                                                        <span className="navbar-toggler-icon icon-menu"></span>
                                                    </button>

                                                    <div className="collapse navbar-collapse"
                                                         id="bs-example-navbar-collapse-1">
                                                        <ul className="navbar-nav">

                                                            <li className="has_dropdown">
                                                                <a href="index.html">Store</a>
                                                                <div className="dropdown dropdown--menu">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="all-products.html">Recent
                                                                                Components</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="all-products.html">Popular
                                                                                Components</a>
                                                                        </li>


                                                                        <li>
                                                                            <a href="#">Top Authors</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="">
                                                                <a href="#">How it works</a>
                                                                <div className="dropdown dropdown--menu">

                                                                </div>
                                                            </li>
                                                            <li className="">
                                                                <a href="#">Pricing</a>

                                                            </li>
                                                            <li className="">
                                                                <a href="#">FAQ</a>

                                                            </li>

                                                        </ul>
                                                    </div>

                                                </nav>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            )
        }
        else if( this.props.navv === "user"){
            return(

                <div className="menu-area">
                    <div className="top-menu-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="menu-fullwidth">
                                        <div className="logo-wrapper">
                                            <div className="logo logo-top">
                                                <Link to="/products"><img src={log} alt="logo image"
                                                                          className="img-fluid"/></Link>
                                            </div>
                                        </div>

                                        <div className="menu-container">
                                            <div className="d_menu">

                                                <nav className="navbar navbar-expand-lg mainmenu__menu">
                                                    <button className="navbar-toggler" type="button"
                                                            data-toggle="collapse"
                                                            data-target="#bs-example-navbar-collapse-1"
                                                            aria-controls="bs-example-navbar-collapse-1"
                                                            aria-expanded="false" aria-label="Toggle navigation">
                                                        <span className="navbar-toggler-icon icon-menu"></span>
                                                    </button>

                                                    <div className="collapse navbar-collapse"
                                                         id="bs-example-navbar-collapse-1">
                                                        <ul className="navbar-nav">

                                                            <li className="has_dropdown">
                                                                <a href="index.html">Store</a>
                                                                <div className="dropdown dropdown--menu">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="all-products.html">Recent
                                                                                Components</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="all-products.html">Popular
                                                                                Components</a>
                                                                        </li>


                                                                        <li>
                                                                            <a href="#">Top Authors</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="">
                                                                <a href="#">How it works</a>
                                                                <div className="dropdown dropdown--menu">

                                                                </div>
                                                            </li>
                                                            <li className="">
                                                                <a href="#">Pricing</a>

                                                            </li>
                                                            <li className="">
                                                                <a href="#">FAQ</a>

                                                            </li>

                                                        </ul>
                                                    </div>

                                                </nav>

                                            </div>
                                        </div>

                                        <div className="author-menu">

                                            <div className="author-area">
                                                <div className="search-wrapper">
                                                    <div className="nav_right_module search_module">
                                                        <span className="icon-magnifier search_trigger"></span>

                                                        <div className="search_area">
                                                            <form action="#">
                                                                <div className="input-group input-group-light">
                                <span className="icon-left" id="basic-addon1">
                                    <i className="icon-magnifier"></i>
                                </span>
                                                                    <input type="text"
                                                                           className="form-control search_field"
                                                                           placeholder="Type words and hit enter..."/>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="author__notification_area">
                                                    <ul>
                                                        <li className="has_dropdown">
                                                            <div className="icon_wrap">
                                                                <span className="icon-bell"></span>
                                                                <span className="notification_status noti"></span>
                                                            </div>

                                                            <div className="dropdown notification--dropdown">

                                                                <div className="dropdown_module_header">
                                                                    <h6>My Notifications</h6>
                                                                </div>

                                                                <div className="notifications_module">
                                                                    <div className="notification">
                                                                        <div className="notification__info">
                                                                            <div className="info_avatar">
                                                                                <img src="img/notification_head.png"
                                                                                     alt=""/>
                                                                            </div>
                                                                            <div className="info">
                                                                                <p>
                                                                                    <span>Anderson</span> added to
                                                                                    Favourite
                                                                                    <a href="#">Mccarther Coffee
                                                                                        Shop</a>
                                                                                </p>
                                                                                <p className="time">Just now</p>
                                                                            </div>
                                                                        </div>

                                                                        <div className="notification__icons ">
                                                                            <span
                                                                                className="icon-heart loved noti_icon"></span>
                                                                        </div>

                                                                    </div>


                                                                    <div className="notification">
                                                                        <div className="notification__info">
                                                                            <div className="info_avatar">
                                                                                <img src={not2}
                                                                                     alt=""/>
                                                                            </div>
                                                                            <div className="info">
                                                                                <p>
                                                                                    <span>Michael</span> commented on
                                                                                    <a href="#">DigiPro Extension
                                                                                        Bundle</a>
                                                                                </p>
                                                                                <p className="time">Just now</p>
                                                                            </div>
                                                                        </div>


                                                                        <div className="notification__icons ">
                                                                            <span
                                                                                className="icon-bubble commented noti_icon"></span>
                                                                        </div>

                                                                    </div>


                                                                    <div className="notification">
                                                                        <div className="notification__info">
                                                                            <div className="info_avatar">
                                                                                <img src={not3}
                                                                                     alt=""/>
                                                                            </div>
                                                                            <div className="info">
                                                                                <p>
                                                                                    <span>Khamoka </span>purchased
                                                                                    <a href="#"> Visibility Manager
                                                                                        Subscriptions</a>
                                                                                </p>
                                                                                <p className="time">Just now</p>
                                                                            </div>
                                                                        </div>


                                                                        <div className="notification__icons ">
                                                                            <span
                                                                                className="icon-basket-loaded purchased noti_icon"></span>
                                                                        </div>

                                                                    </div>


                                                                    <div className="notification">
                                                                        <div className="notification__info">
                                                                            <div className="info_avatar">
                                                                                <img src={not4}
                                                                                     alt=""/>
                                                                            </div>
                                                                            <div className="info">
                                                                                <p>
                                                                                    <span>Anderson</span> added to
                                                                                    Favourite
                                                                                    <a href="#">Mccarther Coffee
                                                                                        Shop</a>
                                                                                </p>
                                                                                <p className="time">Just now</p>
                                                                            </div>
                                                                        </div>

                                                                        <div className="notification__icons "><span
                                                                            className="icon-star reviewed noti_icon"></span>
                                                                        </div>

                                                                    </div>

                                                                    <div
                                                                        className="text-center m-top-30 p-left-20 p-right-20">
                                                                        <a
                                                                            href="notification.html"
                                                                            className="btn btn-primary btn-md btn-block">View
                                                                            All</a></div>

                                                                </div>

                                                            </div>
                                                        </li>

                                                        <li className="has_dropdown">
                                                            <div className="icon_wrap">
                                                                <span className="icon-envelope-open"></span>
                                                                <span className="notification_status msg"></span>
                                                            </div>

                                                            <div className="dropdown messaging--dropdown">
                                                                <div className="dropdown_module_header">
                                                                    <h6>My Messages</h6>
                                                                </div>

                                                                <div className="messages">
                                                                    <a href="message.html" className="message recent">
                                                                        <div className="message__actions_avatar">
                                                                            <div className="avatar">
                                                                                <img src={not4}
                                                                                     alt=""/>
                                                                            </div>
                                                                        </div>


                                                                        <div className="message_data">
                                                                            <div className="name_time">
                                                                                <div className="name">
                                                                                    <p>NukeThemes</p>
                                                                                    <span
                                                                                        className="icon-envelope"></span>
                                                                                </div>

                                                                                <span className="time">Just now</span>
                                                                                <p>Hello John Smith! Nunc placerat mi
                                                                                    ...</p>
                                                                            </div>
                                                                        </div>

                                                                    </a>

                                                                    <a href="message.html" className="message recent">
                                                                        <div className="message__actions_avatar">
                                                                            <div className="avatar">
                                                                                <img src={not5}
                                                                                     alt=""/>
                                                                            </div>
                                                                        </div>


                                                                        <div className="message_data">
                                                                            <div className="name_time">
                                                                                <div className="name">
                                                                                    <p>Crazy Coder</p>
                                                                                    <span
                                                                                        className="icon-envelope"></span>
                                                                                </div>

                                                                                <span className="time">Just now</span>
                                                                                <p>Hi! Nunc placerat mi id nisi interum
                                                                                    ...</p>
                                                                            </div>
                                                                        </div>

                                                                    </a>


                                                                    <a href="message.html" className="message">
                                                                        <div className="message__actions_avatar">
                                                                            <div className="avatar">
                                                                                <img src={not2}
                                                                                     alt=""/>
                                                                            </div>
                                                                        </div>


                                                                        <div className="message_data">
                                                                            <div className="name_time">
                                                                                <div className="name">
                                                                                    <p>Hybrid Insane</p>
                                                                                </div>

                                                                                <span className="time">Just now</span>
                                                                                <p>Hi! Nunc placerat mi id nisi interum
                                                                                    ...</p>
                                                                            </div>
                                                                        </div>

                                                                    </a>


                                                                    <a href="message.html" className="message">
                                                                        <div className="message__actions_avatar">
                                                                            <div className="avatar">
                                                                                <img src={not3}
                                                                                     alt=""/>
                                                                            </div>
                                                                        </div>


                                                                        <div className="message_data">
                                                                            <div className="name_time">
                                                                                <div className="name">
                                                                                    <p>ThemeXylum</p>
                                                                                </div>

                                                                                <span className="time">Just now</span>
                                                                                <p>Hi! Nunc placerat mi id nisi interum
                                                                                    ...</p>
                                                                            </div>
                                                                        </div>

                                                                    </a>


                                                                    <a href="message.html" className="message">
                                                                        <div className="message__actions_avatar">
                                                                            <div className="avatar">
                                                                                <img src={not4}
                                                                                     alt=""/>
                                                                            </div>
                                                                        </div>


                                                                        <div className="message_data">
                                                                            <div className="name_time">
                                                                                <div className="name">
                                                                                    <p>NukeThemes</p>
                                                                                    <span
                                                                                        className="icon-envelope"></span>
                                                                                </div>

                                                                                <span className="time">Just now</span>
                                                                                <p>Hello John Smith! Nunc placerat mi
                                                                                    ...</p>
                                                                            </div>
                                                                        </div>

                                                                    </a>

                                                                </div>
                                                                <div
                                                                    className="text-center m-top-30 m-bottom-30 p-left-20 p-right-20">
                                                                    <a href="message.html"
                                                                       className="btn btn-primary btn-md btn-block">View
                                                                        All</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="has_dropdown">
                                                            <div className="icon_wrap">
                                                                <span className="icon-basket-loaded"></span>
                                                                <span className="notification_count purch">2</span>
                                                            </div>

                                                            <div className="dropdown dropdown--cart">
                                                                <div className="cart_area">
                                                                    <div className="cart_list">
                                                                        <div className="cart_product">
                                                                            <div className="product__info">
                                                                                <div className="thumbn">
                                                                                    <img src={cap}
                                                                                         alt="cart product thumbnail"/>
                                                                                </div>

                                                                                <div className="info">
                                                                                    <a className="title"
                                                                                       href="single-product.html">Finance
                                                                                        and Consulting Business
                                                                                        Theme</a>
                                                                                    <div className="cat">
                                                                                        <a href="#">
                                                                                            <img src="img/catword.png"
                                                                                                 alt=""/>Wordpress</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="product__action">
                                                                                <a href="#">
                                                                                    <span className="icon-trash"></span>
                                                                                </a>
                                                                                <p>$60</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cart_product">
                                                                            <div className="product__info">
                                                                                <div className="thumbn">
                                                                                    <img src={cap2}
                                                                                         alt="cart product thumbnail"/>
                                                                                </div>

                                                                                <div className="info">
                                                                                    <a className="title"
                                                                                       href="single-product.html">Flounce
                                                                                        - Multipurpose OpenCart
                                                                                        Theme</a>
                                                                                    <div className="cat">
                                                                                        <a href="#">
                                                                                            <img src={co}
                                                                                                 alt=""/>Wordpress</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="product__action">
                                                                                <a href="#">
                                                                                    <span className="icon-trash"></span>
                                                                                </a>
                                                                                <p>$60</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="total">
                                                                        <p>
                                                                            <span>Total :</span>$80</p>
                                                                    </div>
                                                                    <div className="cart_action">
                                                                        <a className="btn btn-primary" href="cart.html">View
                                                                            Cart</a>
                                                                        <a className="btn btn-secondary"
                                                                           href="checkout.html">Checkout</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="author-author__info has_dropdown">
                                                    <div className="author__avatar online">
                                                        <img src={usr} alt="user avatar"
                                                             className="rounded-circle"/>
                                                    </div>

                                                    <div className="dropdown dropdown--author">
                                                        <div className="author-credits d-flex">
                                                            <div className="author__avatar">
                                                                <img src={usr} alt="user avatar"
                                                                     className="rounded-circle"/>
                                                            </div>
                                                            <div className="autor__info">
                                                                <p className="name">
                                                                    Chris Bent
                                                                </p>
                                                                <p className="amount">$20.45</p>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <a href="author.html">
                                                                    <span className="icon-user"></span>Profile</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard.html">
                                                                    <span className="icon-home"></span> Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard-setting.html">
                                                                    <span className="icon-settings"></span> Settings</a>
                                                            </li>
                                                            <li>
                                                                <a href="cart.html">
                                                                    <span className="icon-basket"></span>My
                                                                    Purchases</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="icon-logout"></span>Logout</a></li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="mobile_content ">
                                                <span className="icon-user menu_icon"></span>


                                                <div className="offcanvas-menu closed">
                                                    <span className="icon-close close_menu"></span>
                                                    <div className="author-author__info">
                                                        <div className="author__avatar v_middle">
                                                            <img src={usr} alt="user avatar"/>
                                                        </div>
                                                    </div>


                                                    <div className="author__notification_area">
                                                        <ul>
                                                            <li>
                                                                <a href="notification.html">
                                                                    <div className="icon_wrap">
                                                                        <span className="icon-bell"></span>
                                                                        <span
                                                                            className="notification_count noti">25</span>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="message.html">
                                                                    <div className="icon_wrap">
                                                                        <span className="icon-envelope"></span>
                                                                        <span
                                                                            className="notification_count msg">6</span>
                                                                    </div>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="cart.html">
                                                                    <div className="icon_wrap">
                                                                        <span className="icon-basket"></span>
                                                                        <span
                                                                            className="notification_count purch">2</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>


                                                    <div className="dropdown dropdown--author">
                                                        <ul>
                                                            <li>
                                                                <a href="author.html">
                                                                    <span className="icon-user"></span>Profile</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard.html">
                                                                    <span className="icon-home"></span> Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard-setting.html">
                                                                    <span className="icon-settings"></span> Setting</a>
                                                            </li>
                                                            <li>
                                                                <a href="cart.html">
                                                                    <span className="icon-basket"></span>Purchases</a>
                                                            </li>
                                                            <li>
                                                                <a href="favourites.html">
                                                                    <span className="icon-heart"></span> Favourite</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard-add-credit.html">
                                                                    <span className="icon-credit-card"></span>Add
                                                                    Credits</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard-statement.html">
                                                                    <span className="icon-chart"></span>Sale
                                                                    Statement</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard-upload.html">
                                                                    <span className="icon-cloud-upload"></span>Upload
                                                                    Item</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard-manage-item.html">
                                                                    <span className="icon-notebook"></span>Manage
                                                                    Item</a>
                                                            </li>
                                                            <li>
                                                                <a href="dashboard-withdrawal.html">
                                                                    <span className="icon-briefcase"></span>Withdrawals</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="icon-logout"></span>Logout</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="text-center">
                                                        <a href="signup.html"
                                                           className="author-area__seller-btn inline">Become a
                                                            Seller</a>
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
            )}
        return (
            <div className="menu-area">
                <div className="top-menu-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-fullwidth">
                                    <div className="logo-wrapper">
                                        <div className="logo logo-top">
                                            <Link to="/products"><img src={log} alt="logo image"
                                                                      className="img-fluid"/></Link>
                                        </div>
                                    </div>

                                    <div className="menu-container">
                                        <div className="d_menu">

                                            <nav className="navbar navbar-expand-lg mainmenu__menu">
                                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                        data-target="#bs-example-navbar-collapse-1"
                                                        aria-controls="bs-example-navbar-collapse-1"
                                                        aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon icon-menu"></span>
                                                </button>

                                                <div className="collapse navbar-collapse"
                                                     id="bs-example-navbar-collapse-1">
                                                    <ul className="navbar-nav">

                                                        <li className="has_dropdown">
                                                            <a href="index.html">Store</a>
                                                            <div className="dropdown dropdown--menu">
                                                                <ul>
                                                                    <li>
                                                                        <a href="all-products.html">Recent
                                                                            Components</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="all-products.html">Popular
                                                                            Components</a>
                                                                    </li>


                                                                    <li>
                                                                        <a href="#">Top Authors</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="">
                                                            <a href="#">How it works</a>
                                                            <div className="dropdown dropdown--menu">

                                                            </div>
                                                        </li>
                                                        <li className="">
                                                            <a href="#">Pricing</a>

                                                        </li>
                                                        <li className="">
                                                            <a href="#">FAQ</a>

                                                        </li>

                                                    </ul>
                                                </div>

                                            </nav>

                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            <button className="button button1" onClick={this.handleClick}> Sign in</button>
                                        </li>
                                        <button className="button button2" onClick={this.handleClick2}> Sign up </button>
                                    </ul>


                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        );
    };
}



export default Header;


/*
*                         <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
* */