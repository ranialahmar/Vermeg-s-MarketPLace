import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import AdminFormDeleteUser from './AdminFormDeleteUser';


export default class UsersList extends Component {
    constructor(props){
        super(props);
        this.state={
            apiList: [],comments:[],comment:'',apiRef: []
        }
    }

     componentDidMount() {
        try {
             axios.get('http://localhost:8080/Users').then(res=>{

                 console.log(res.data);
            const apiList =res.data;
            this.setState({apiList});

                 axios.get('http://localhost:8080/reference')
                     .then(resp=> {

                         console.log(resp.data);
                         const apiRef = resp.data;
                         this.setState({apiRef});
                     })

        })}catch (error) {
            console.log(error);
        }
    }

    render() {
        const stylesColor = (color) => ({
            textDecoration: 'underline',
            textDecorationColor: color
        })

        const { stylesTab4 } = this.props
        const { apiList } = this.state
        const { apiRef } = this.state
        return (
            <Table responsive striped bordered hover size="sm">
                <thead style={stylesTab4}>
                <tr>
                    <th>#</th>
                    <th>User_Id</th>
                    <th>Role_Id</th>
                    <th>Username</th>
                    <th>email</th>
                    <th>password</th>
                    <th> LinkedIn</th>
                    <th>Company_Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Postal Code</th>
                    <th>Position</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    apiList.map((x, index)=>
                        <tr key={x.id}>
                            <th scope="row">{index+1}</th>
                            <td>{x.id}</td>
                            <td>{x.UsrRol.map(x=><span><span >{x.refId}</span></span>)}</td>
                            <td>{x.username}</td>
                            <td>{x.email}</td>
                            <td>{x.password}</td>
                            <td>{x.linkedinUrl}</td>
                            <td>{x.companyName}</td>
                            <td>{x.country}</td>
                            <td>{x.city}</td>
                            <td>{x.postalCode}</td>
                            <td>{x.position}</td>

                            <td><AdminFormDeleteUser id={x.id} username={x.username} companyName={x.companyName}/></td>
                        </tr>
                    )
                }
                </tbody>

                <thead style={stylesTab4}>
                <tr>

                    <th>Ref_Id</th>
                    <th>Role_Id</th>
                    <th>User_Id</th>

                </tr>
                </thead>
                <tbody>
                {
                    apiRef.map(x=>
                    <tr key={x.ref_id}>
                        <td>{x.ref_id}</td>
                        <td>{x.role_id}</td>
                        <td>{x.user_id}</td>
                    </tr>)

                }
                </tbody>
                <thead style={stylesTab4}>
                <tr>

                    <th>Role_Id</th>
                    <th>Role</th>

                </tr>
                </thead>
                <tbody>
                        <tr key="1">
                            <td>1</td>
                            <td>Administrateur</td>
                        </tr>
                        <tr key="2">
                    <td>2</td>
                    <td>Client</td>
                    </tr>


                </tbody>
            </Table>
        )
    }
};
//