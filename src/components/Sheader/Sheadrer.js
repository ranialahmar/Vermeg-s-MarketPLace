//Dependencies
import React from 'react';
//Internals

import hero from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/heroooooooooooo.jpeg'

const Sheader = () => (
    <div className="sheader" >

        <section className="hero-area2 hero-area3 bgimage">
            <div className="bg_image_holder">
                <img src={hero} alt="background-image"/>
            </div>
            <div className="hero-content content_above">
                <div className="content-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero__content__title">
                                    <h1>Build your Digital Platform</h1>
                                </div>

                                <div className="search-area">
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">

                                            <div className="search_box2">
                                                <form action="#">
                                                    <input type="text" className="text_field"
                                                           placeholder="Search your products..."/>
                                                        <button type="submit"
                                                                className="search-btn btn--lg btn-primary">Search Now
                                                        </button>
                                                </form>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>



    </div>
)

export default Sheader;