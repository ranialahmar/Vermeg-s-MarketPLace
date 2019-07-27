import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class Categories extends Component {
    constructor(props){
        super(props);
        this.state={
            apiList: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get('http://localhost:8080/categories')
            const apiList = await response.data;
            this.setState({ apiList })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const stylesColor = (color) => ({
            textDecoration: 'underline',
            textDecorationColor: color
        })
        const { stylesTab1 } = this.props
        const { apiList } = this.state
        return (
            <Table responsive striped hover size="sm">
                <thead style={stylesTab1}>
                <tr >
                    <th>#</th>
                    <th>Id</th>
                    <th>Category </th>

                </tr>
                </thead>
                <tbody>
                {
                    apiList.map((x, index)=>
                        <tr key={x.id}>
                            <th scope="row">{index+1}</th>
                            <td>{x.id}</td>

                            <td>{x.name}</td>

                        </tr>
                    )
                }
                </tbody>
            </Table>
        )
    }
};
