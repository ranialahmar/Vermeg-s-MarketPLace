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
        comments:[],
        category:'',
       // imag:'',
    redirect:false,
        path:''
    }

   componentDidMount() {

       axios.get('/productcateg/'+this.state.id)
           .then(res=>

               this.setState({category:res.data})
           )
        axios.get('/media/'+this.state.id)
            .then(response=>{


                 this.setState({path:response.data});
            })

axios.get("/comment/"+this.state.id) .then(res=>

    this.setState({comments:res.data})
)
    }


    handleClick=()=>{

    this.setState({redirect:true});


    }

render()
{
    const { redirect }= this.state;
    if(redirect){
    return( <Redirect  to={{
        pathname: '/prod',
        state: { id:this.state.id, title:this.state.name, description:this.state.description, version:this.state.version, date_update:this.state.date_update
,date_delivary: this.state.date_delivary,categorie:this.state.category, comments: this.state.comments,path:this.state.path}
    }}/>
    ) }

    return (

        <div className=" col-xl-5 col-lg-8 col-md-8">

            <div className="product-single latest-single">
                <div className="product-thumb">
                            <figure>
                                {(() => {
                                    if (this.state.path==="solife.png") {
                                        return (
                                            <img   src={require(`/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/images/solife.png`)} alt="" className="img-fluid"/>
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
                                    <figcaption>
                                        <ul className="list-unstyled">

                                            <li>
                                                <button className="button button3" onClick={this.handleClick}>Live Demo</button>
                                            </li>
                                        </ul>
                                    </figcaption>
                            </figure>

                        </div>
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

                                    <a href="#">{this.state.category}</a>
                                </li>
                            </ul>
                            <ul >
                                <li  className="price"><b >Version :</b> {this.state.version}</li>
                                <li className="price"><b>Released :</b> {this.state.date_delivary}</li>
                                <li className="price"><b>Updated  :</b> {this.state.date_update}</li>


                            </ul>
                        </div>

                    </div>
                </div>





    );
}};

export default Product;

