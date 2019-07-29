import React, { Component } from 'react';
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Header/sty.css'
import foot from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/footer-logo.png'
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ListGroup, InputGroup, InputGroupAddon, InputGroupText, ModalFooter
} from 'reactstrap';
import {InputLabel} from "@material-ui/core";
import Header from "../Header/Header";

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalEdit: false,
           name:'',
            password:'',
            id:'',
            apiResponse: '',
            re:"true"
        };
    }


    onChangeEmail = (e) => {
        this.setState({name: e.target.value})
    }

    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    }

    handleSubmit=async ()=>{
        axios.get("/user/"+this.state.name)
            .then(res=>{
                console.log(res.data.UsrRol[0].refId);
                this.setState({id:res.data.UsrRol[0].refId})
                if(res.data.password===this.state.password ) {
                    console.log("authorized");
                    this.setState({apiResponse: 'success'})

                }})
            .catch(error=> {
                this.setState({ apiResponse: error.response.statusText})
                console.log(error.response);
            })
    }


    redirectLoginSuccessListener = () => {
        if (this.state.apiResponse === 'success') {
            return <Redirect to={{
                pathname: "/produser",
                state:{name:this.state.name}
            }}
            />

        }
    }






    render() {

        const errors =
            this.state.apiResponse === 'Bad Request' ?
                'Please fill the email and password fields' :
                this.state.apiResponse === 'Unauthorized' &&
                'Email or password incorrect'

        return (
            <div>
                {this.redirectLoginSuccessListener()}

                <Header navv={this.state.re}/>

                <section className="login_area section--padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                <form action="#">
                                    <div className="cardify login">
                                        <div className="login--header">
                                            <h3>Welcome</h3>
                                            <p>You can sign in with your username</p>
                                        </div>

                                        <div className="login--form">
                                            <div className="form-group">
                                                <label >Username</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="text_field"
                                                    placeholder="Enter your username..."
                                                    value={this.state.name} onChange={this.onChangeEmail}
                                                    id="user_name" />
                                            </div>

                                            <div className="form-group">
                                                <label >Password</label>
                                                <input
                                                    type="text"
                                                    name="password"
                                                    id="pass"
                                                    className="text_field" placeholder="Enter your password..."
                                                    value={this.state.password} onChange={this.onChangePassword}/>
                                            </div>

                                            <div className="form-group">
                                                <div className="custom_checkbox">
                                                    <input type="checkbox" id="ch2"/>
                                                        <label for="ch2">
                                                            <span class="shadow_checkbox"></span>
                                                            <span class="label_text">Remember me</span>
                                                        </label>
                                                </div>
                                            </div>

                                            <button className="btn btn--md btn-primary"  onClick={this.handleSubmit}>Login Now</button>

                                            <div className="login_assist">
                                                <p className="recover">Lost your
                                                    <a href="recover-pass.html">username</a> or
                                                    <a href="recover-pass.html">password</a>?</p>
                                                <p className="signup">Don't have an
                                                    <a href="signup.html">account</a>?</p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


                <footer className="footer-area footer">
                    <div className="footer-big">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="footer-widget">

                                        <div className="widget-about">
                                            <img src={foot} alt="" className="img-fluid"/>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.</p>
                                                <ul className="contact-details">
                                                    <li>
                                                        <span className="icon-earphones"></span>
                                                        Call Us:
                                                        <a href="tel:+33 1 40 13 29 00">+33 1 40 13 29 00</a>
                                                    </li>
                                                    <li>
                                                        <span className="icon-envelope-open"></span>
                                                        E-mail:
                                                        <a href="mailto:support@aazztech.com">support@vermeg.com</a>
                                                    </li>
                                                </ul>
                                        </div>

                                    </div>

                                </div>


                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <div className="footer-menu no-padding">
                                            <h5 className="footer-widget-title">Help Support</h5>
                                            <ul>
                                                <li>
                                                    <a href="#">Support Forum</a>
                                                </li>
                                                <li>
                                                    <a href="#">Terms & Conditions</a>
                                                </li>
                                                <li>
                                                    <a href="#">Support Policy</a>
                                                </li>
                                                <li>
                                                    <a href="#">Refund Policy</a>
                                                </li>
                                                <li>
                                                    <a href="#">FAQs</a>
                                                </li>
                                                <li>
                                                    <a href="#">Buyers Faq</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sellers Faq</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="mini-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="copyright-text">
                                        <p>&copy; 2019
                                            <a href="#">Vermeg</a>. All rights reserved. Vermeg Ltd Legal.
                                        </p>
                                    </div>

                                    <div className="go_top">
                                        <span className="icon-arrow-up"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>



            </div>




        )

    }
}

export default LoginForm;
