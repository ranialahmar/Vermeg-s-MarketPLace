import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';

class Admin extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: 'admin',
            password: 'admin',
            id:'',
            apiResponse: ''
        };
    }
componentDidMount() {
       axios.get("http://localhost:8080/reference/1")
            .then(res=>{
                console.log(res.data);

                this.setState({id:res.data[0]})
            })
}

    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }

    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    }

    onLogin = async() => {


        axios.get("http://localhost:8080/User/"+this.state.id)
            .then(res=>{
                if(res.data.username==this.state.email && res.data.password==this.state.password ){
                console.log("authorized");
                    localStorage.setItem("token", res.data.token);
                    this.setState({apiResponse: 'success'})



            }})
            .catch(error=> {
        this.setState({ apiResponse: error.response.statusText})
        console.log(error.response);
             })
    }





    redirectLoginSuccessListener = () => {
        if (this.state.apiResponse === 'success') {
            return <Redirect to={{
                pathname: "/dashboard",
                state: { referrer: 'test' }
            }}
            />

        }
    }

    render() {

        const errors =
            this.state.apiResponse === 'Bad Request' ?
                'Please fill the email and password fields' :
                this.state.apiResponse === 'Unauthorized' &&
                'Email or password incorrect'

        return (
            <div>
                {this.redirectLoginSuccessListener()}
                <Container className="App" style={{paddingTop: '150px', paddingBottom: '200px'}}>
                    <h2>Admin Dashboard</h2>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label>Admin</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="Admin"
                                    value={this.state.email} onChange={this.onChangeEmail}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                    value={this.state.password} onChange={this.onChangePassword}
                                />
                            </FormGroup>
                        </Col>
                        <Button onClick={this.onLogin}>Login</Button>
                    </Form>
                </Container>
            </div>
        )

    }
}

export default Admin;
