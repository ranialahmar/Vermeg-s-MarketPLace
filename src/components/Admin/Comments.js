import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class Comments extends Component {
    constructor(props){
        super(props);
        this.state={
            apiList: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/comments')
            const apiList = await response.data;
            this.setState({ apiList })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const apiList=this.state.apiList;


        return(
            <div>
                {apiList}
            </div>
        )
    }







}
