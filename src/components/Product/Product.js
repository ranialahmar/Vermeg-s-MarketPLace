import React, {Component} from 'react';
import axios from 'axios';
import solif from '../../images/solife.png';
import { Redirect } from 'react-router-dom';
import './Product.scss';
import p1 from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/product1.png';
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Header/sty.css'
import meg from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/megara.png'
import auth from '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/img/auth-img.png'


class Product extends Component{

    state= {
        name:this.props.product.name,
        description:this.props.product.description,
        version:this.props.product.version,
        date_delivary:this.props.product.date_delivary,
        date_update:this.props.product.date_update,
        id:this.props.product.id,
        comments:this.props.product.comments,
        category:'',
       // imag:'',
    redirect:false,
        path:''
    }

   componentDidMount() {

       axios.get('http://localhost:8080/productcateg/'+this.state.id)
           .then(res=>

               this.setState({category:res.data})
           )
        axios.get('http://localhost:8080/media/'+this.state.id)
            .then(response=>{


                 this.setState({path:response.data});
            })


    }


    handleClick=()=>{
        console.log(typeof this.state.path);
    console.log(this.state.id);
console.log(this.state.path.prop);
    this.setState({redirect:true});


    }

render()
{
    const { redirect }= this.state;
    //const images = require.context('/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images',true);
    if(redirect){
    return( <Redirect  to={{
        pathname: '/prod',
        state: { id:this.state.id, title:this.state.name, description:this.state.description, version:this.state.version, date_update:this.state.date_update
,date_delivary: this.state.date_delivary,categorie:this.state.category, comments: this.state.comments,path:this.state.path}
    }}/>
    ) }

    return (

        <div className=" col-xl-4 col-lg-6 col-md-6">

            <div className="product-single latest-single">
                <div className="product-thumb">
                            <figure>
                                <img src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/prodvermeg.jpeg`)} alt="" className="img-fluid"/>
                                    <figcaption>
                                        <ul className="list-unstyled">

                                            <li>
                                                <button onClick={this.handleClick}>Live Demo</button>
                                            </li>
                                        </ul>
                                    </figcaption>
                            </figure>
                            <div className="product-rating2">
                                <ul className="list-unstyled">
                                    <li className="stars">
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                        <span><i className="fa fa-star"></i></span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-excerpt">
                            <h5>
                                <a href="product.html"> {this.state.title}</a>
                            </h5>
                            <ul className="titlebtm">
                                <li>
                                    <img className="auth-img" src={auth} alt="author image"/>
                                        <p>
                                            <a href="#"> {this.state.title}</a>
                                        </p>
                                </li>
                                <li className="product_cat">
                                    in
                                    <a href="#">HTML</a>
                                </li>
                            </ul>
                            <ul className="product-facts clearfix">
                                <li className="price">$20</li>
                                <li className="sells">
                                    <span className="icon-basket"></span>52
                                </li>
                                <li className="product-fav">
                                    <span className="icon-heart" title="Add to collection" data-toggle="tooltip"></span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>





    );
}};

export default Product;

