import React, { Component } from 'react';
import { Button, Input, Form, FormGroup, Label, Container, Alert } from 'reactstrap';
import axios from 'axios';

class AdminFormAddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalEdit: false,
            name: '',
            description: '',
            version:'',
            category_id:'',
            date_delivary:'',
            sate_update:'',
            success: false
        };
    }

    toggle = () => {
        this.setState({
            modalEdit: !this.state.modalEdit
        });
    }


    onSubmit = (name, description, version,category_id, date_delivary, date_update) => {
      axios.post('/product/'+this.state.category_id, {
            name,
           description,
            version,
            date_delivary,
            date_update
        })
            .then(() => {
                this.setState({success:true})
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChangeName = (e) => this.setState({name: e.target.value})
    onChangeVersion = (e) => this.setState({version: e.target.value})

    onChangeDateDel = (e) => this.setState({date_delivary: e.target.value})
    onChangeDateUpd = (e) => this.setState({date_update: e.target.value})
    onChangeDescription = (e) => this.setState({description: e.target.value})

    onChangeCategory = (e) => this.setState({category_id: e.target.value})

    render() {
        const { name, version, date_delivary, category_id,date_update, description , success} = this.state
        return (
            <Container style={{paddingTop: '50px', paddingBottom:'50px'}}>
                <h1>Add new Product</h1>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Product's name</Label>
                        <Input placeholder='' value={this.state.name} onChange={this.onChangeName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">description</Label>
                        <Input placeholder='' value={this.state.price} onChange={this.onChangeDescription} />
                    </FormGroup>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1"> select Category</label>
                        <select className="form-control" id="exampleFormControlSelect1"  value={this.state.category_id} onChange={this.onChangeCategory}>
                            <option>...</option>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>
                    <FormGroup>
                        <Label for="exampleEmail">Version</Label>
                        <Input placeholder='' value={this.state.version} onChange={this.onChangeVersion} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Date_delivary</Label>
                        <Input placeholder='' value={this.state.date_delivary} onChange={this.onChangeDateDel} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Date_update</Label>
                        <Input placeholder='' value={this.state.tags} onChange={this.onChangeDateUpd} />
                    </FormGroup>

                </Form>
                <Button onClick={()=>this.onSubmit(
                    name,
                    description,
                    version,
                    category_id,
                    date_delivary,
                    date_update
                )}>Submit</Button>
            </Container>
        );
    }
}

export default AdminFormAddItem;