import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '/home/rania/Downloads/React-Ecommerce-App-with-Redux-master (2)/src/components/Header/sty.css'
import {
    Button,
    Input,
    Form,
    FormGroup,
    Label,
    Container,
    Col,
    FormFeedback,
    Alert,
    Modal,
    ModalHeader,
    ModalBody,
    ListGroup
} from 'reactstrap';
import axios from 'axios';
import Row from "reactstrap/es/Row";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class SignForm extends Component {

        state = {
            modalEdit: false,
            role_id: '',
            username: '',
            password: '',
            email: '',
            linkedinUrl:'',
            companyName: '',
            country:'',
            city:'',
            postalCode:'',
            position:'',
            success: false,
            redirect:false
        };


    toggle = () => {
        this.setState({
            modalEdit: !this.state.modalEdit
        });
    }




    handleInputChange = param =>
        this.setState({ [param.target.name]: param.target.value });

    handleSubmit= event => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            linkedinUrl:this.state.linkedinUrl,
            companyName: this.state.companyName,
            country:this.state.country,
            city:this.state.city,
            postalCode:this.state.postalCode,
            position:this.state.position

        }

        axios.post('http://localhost:8080/user/2',user)
            .then(res=>{
                 console.log(res.data);
                 this.setState({redirect:true})

            }
            )
            .catch(error => console.log(error))


    }


    render() {
const {redirect}=this.state;
        if (redirect)
        {
            return(<div>  <Redirect  to= {{
                pathname: '/produser'
            }}/>;
            </div>);
        }
        return (
            <div>
            <Header navv="true"/>
            <Container style={{paddingTop: '50px', paddingBottom:'50px'}}>
                <h1 color="red">Welcome</h1>

                <Form>
               <Row>
                 <Col md={6}>
                    <FormGroup>
                        <Label > <b color="red">Business Name*</b></Label>
                        <Input placeholder='' name="username"  styme={{innerWidth:'30px'}}value={this.state.username} onChange={this.handleInputChange} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                    <Label for="exampleEmail"> <b color="red">E-mail *</b></Label>
                    <Input placeholder='ex:myname@example.com' type ="email" name="email"value={this.state.email} onChange={this.handleInputChange}  valid/>

                    </FormGroup>

                 </Col>
                 <Col md={6}>

                 <FormGroup>
                    <Label for="exampleEmail"> <b color="red">LinkedIn URL *</b></Label>
                    <Input placeholder='ex:www.linkedin.com/in/name--846592152/' name="linkedinUrl" value={this.state.linkedinUrl} onChange={this.handleInputChange} />
                 </FormGroup>
                 </Col>
                   <Col md={6}>
                     <FormGroup>
                        <Label for="exampleEmail"> <b color="red">Enter Password*</b></Label>
                        <Input placeholder='' name="password" value={this.state.password} onChange={this.handleInputChange} valid />
                     </FormGroup>
                    </Col>

                    <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail"> <b color="red">Company*</b></Label>
                        <Input placeholder='' name="companyName" value={this.state.companyName} onChange={this.handleInputChange} />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <div className="form-group">
                        <Label for="exampleEmail"> <b color="red">Position *</b></Label>
                        <select className="form-control"  name="position" id="exampleFormControlSelect1"  value={this.state.position} onChange={this.onChangeCategory}>
                            <option> your Position...</option>
                            <option>Director</option>
                            <option>developer</option>
                            <option>Vice chairwomen</option>
                            <option>executive chairman</option>
                            <option>manager</option>
                            <option>founder</option>
                        </select>
                    </div>
                    </Col>
</Row>


                    <h3 align="center" color={"red"}> --Company's Address--</h3>
                    <Row>
                        <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail"> <b color="red">Country *</b></Label>
                        <Input placeholder=''  name="country" value={this.state.country} onChange={this.handleInputChange} />
                    </FormGroup>
                        </Col>
                        <Col md={4}>
                    <FormGroup>
                        <Label for="exampleEmail"> <b color="red">City *</b></Label>
                        <Input placeholder='' name="city" value={this.state.city} onChange={this.handleInputChange} />
                    </FormGroup>
                        </Col>
                        <Col md={2}>
                    <FormGroup>
                        <Label for="exampleEmail"> <b color="red">Postal Code *</b></Label>
                        <Input placeholder='' name="postalCode" value={this.state.postalCode} onChange={this.handleInputChange} />
                    </FormGroup>
                        </Col>
                    </Row>
                    <Button  onClick={this.handleSubmit} >Submit Registration</Button>

                </Form>

            </Container>
                <Footer/>
            </div>

        );
    }
}

export default SignForm;