import React from 'react';
import foot from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/vermeg.png'
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Header/sty.css';
const Footer = () => {
    return (
        <footer className="footer-area footer ">
            <div className="footer-big">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="footer-widget">

                                <div className="widget-about">
                                    <img src={foot} width="50%" alt="" className="img-fluid"/>
                                        <p color="black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</p>
                                        <ul className="contact-details">
                                            <li>
                                                <span className="icon-earphones"></span>
                                                Call Us:
                                                <a href="tel:+33 1 40 13 29 00">+33 1 40 13 29 00</a>
                                            </li>
                                            <li>
                                                <span className="icon-envelope-open"></span>
                                                E-mail:
                                                <a href="mailto:support@Palmyra.com">support@vermeg.com</a>
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

    );
};

export default Footer;