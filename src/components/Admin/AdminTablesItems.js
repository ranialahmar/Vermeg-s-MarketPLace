import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import AdminModalUpdate from './AdminModalUpdate';
import AdminFormDeleteItem from './AdminFormDeleteItem';
import Comments from "./Comments"

export default class AdminTablesItems extends Component {
    constructor(props){
        super(props);
        this.state={
            apiList: [],comments:[],comment:''
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/products')
            const apiList = await response.data;
            this.setState({ apiList });
            console.log(this.state.apiList[0].comments[0].comment)

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const stylesColor = (color) => ({
            textDecoration: 'underline',
            textDecorationColor: color
        })

        const { stylesTab2 } = this.props
        const { apiList } = this.state

        return (
            <Table responsive striped bordered hover size="sm">
                <thead style={stylesTab2}>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Id</th>
                    <th>version</th>
                    <th>Date_delivery</th>
                    <th>Date_update</th>
                    <th>Description</th>
                    <th>Comments</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    apiList.map((x, index)=>
                        <tr key={x.id}>
                            <th scope="row">{index+1}</th>
                            <td>{x.name}</td>
                            <td>{x.id}</td>
                            <td>{x.version}</td>
                            <td>{new Date(x.date_delivary).toISOString().slice(0, 19).replace('T', ' ')}</td>
                            <td>{new Date(x.date_update).toISOString().slice(0, 19).replace('T', ' ')}</td>
                            <td>{x.description.substring(0, 30)+'... '}</td>
                            <td>{x.comments.map(x=><span><span > * <b> " {x.comment} "</b>By Client <b> {x.id} </b> at <b>{new Date(x.date).toISOString().slice(0, 19).replace('T', ' ')}</b>    </span> <br/></span>)}</td>
                            <td><AdminModalUpdate infos={x}  /></td>
                            <td><AdminFormDeleteItem id={x.id} title={x.title}/></td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        )
    }
};
/*

<td><AdminFormDeleteItem id={x._id} title={x.title}/></td>*/