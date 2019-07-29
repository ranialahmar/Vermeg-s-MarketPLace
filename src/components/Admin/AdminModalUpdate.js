import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { FiEdit } from 'react-icons/fi';
import axios from 'axios';

class AdminModalUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalEdit: false,
            name: this.props.infos.name,
            version: this.props.infos.version,
            date_delivary: this.props.infos.date_delivary,
            date_update:this.props.infos.date_update,
            description: this.props.infos.description
        };
    }

    toggle = () => this.setState({ modalEdit: !this.state.modalEdit });

    onSubmit = (id, name, version, date_delivary,date_update,description) => {
        axios.put("/product/"+this.props.infos.id, {
            name,
            version,
            date_delivary,
            date_update,description

        })
            .then(response => {
                this.setState({ modalEdit: !this.state.modalEdit });
                console.log(response);
            })
            .then(() => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err);
            });
    }

    onChangeName = (e) => this.setState({name: e.target.value})
    onChangeVersion = (e) => this.setState({version: e.target.value})

    onChangeDateDel = (e) => this.setState({date_delivary: e.target.value})
    onChangeDateUpd = (e) => this.setState({date_update: e.target.value})
    onChangeDescription = (e) => this.setState({description: e.target.value})


    render() {
        const { name, version, date_delivary, date_update ,description} = this.state
        const { _id } = this.props.infos;

        return (
            <div>
                <Button outline color="primary" size='sm' onClick={this.toggle}><FiEdit /></Button>
                <Modal isOpen={this.state.modalEdit} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.infos.name} - (id: {this.props.infos.id})</ModalHeader>
                    <ModalBody>
                        <ListGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Name</InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder={"default: "+this.props.infos.name} value={name} onChange={this.onChangeName} />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Version</InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder={"default: "+this.props.infos.version} value={version} onChange={this.onChangeVersion} />
                            </InputGroup>


                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Date_delivary</InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder={"default: "+this.props.infos.date_delivary} value={date_delivary} onChange={this.onChangeDateDel} />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Date_update</InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder={"default: "+this.props.infos.date_update} value={date_update} onChange={this.onChangeDateUpd} />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>description</InputGroupText>
                                </InputGroupAddon>
                                <Input type="textarea" placeholder={"default: "+this.props.infos.description} value={description} onChange={this.onChangeDescription} />
                            </InputGroup>
                        </ListGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                                onClick={()=>this.onSubmit(
                                    _id,
                                    name,
                                    version,

                                  date_delivary,
                                    date_update,

                                    description
                                )}>Confirm the changes?
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
};

export default AdminModalUpdate;