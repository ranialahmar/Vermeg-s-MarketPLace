import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminDash from './AdminDash';


class Secret extends Component {
    constructor(props){
        super(props);
        this.state = {
            authorization: false,
            apiAuth: false
        };
    }

    async componentDidMount() {
        try {
            this.setState( {apiAuth:true })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const showAdminPanel = this.state.apiAuth ? <AdminDash /> : <p>Authorization is required, please login here: <Link to="/admin">login</Link></p>

        return (
            <div>
                {showAdminPanel}
            </div>
        )
    }
}

export default Secret;