import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';
import configureStore from "./store";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Header/sty.css'
import './App.scss';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
//import "/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Sheader/Sheader.css"
import Sheader from "/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Sheader/Sheadrer.js"
import Search from "./components/Search/Search";
import Admin from "./components/Admin/Admin";
import Secret from "./components/Admin/Secret";
import SignForm from "./components/Authentication/SignForm";
import LoginForm from "./components/Authentication/LoginForm";
import Faq from "/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/FAQ/Faq.js"
import ProdUser from "./components/ProdUser";



let store = configureStore();

const classNames = [
    "first-header",
    "second-header",
    "third-header",
    "fourth-header"
];


//export const  store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            redirect:false

        };
    }

    incrementIndex = () => {
        const newIndex = this.state.index + 1;
        this.setState({ index: newIndex })
    }

    componentDidMount = () => {
        setInterval(this.incrementIndex, 3000);
    }

    render() {
        const index = this.state.index % classNames.length;
        const className = classNames[index];
    return (
        <Provider store={store}>
            <BrowserRouter>


                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/products'}/>
                    }}/>
                    <Route exact path={'/faq'} component={Faq}/>
                    <Route exact path={'/register'} component={SignForm}/>
                    <Route exact path={'/login'} component={LoginForm}/>
                    <Route exact path={'/products'} render={Home}/>
                    <Route exact path={'/produser'} component={ProdUser}/>
                    <Route exact path={'/prod'} component={ProductDetail}/>>

                    <Route exact path={'/cart'} component={ShoppingCart}/>
                    <Route exact path={'/dashboard'} component={Secret}/>
                    <Route exact path={'/admin'} component={Admin}/>
                </Switch>

            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
