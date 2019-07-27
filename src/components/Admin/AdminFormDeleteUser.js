import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FiXCircle } from 'react-icons/fi';
import axios from 'axios';

class AdminFormDeleteUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalEdit: false,
        };
    }

    handleDelete = id => {
        axios.delete('http://localhost:8080/user/'+id
        )
            .then(response => {
                console.log(response);
                this.setState({ modalEdit: !this.state.modalEdit });
            })
            .then(() => {
                window.location.reload()
            })
            .catch(error => {
                console.log(error);
            });
    }

    toggle = () => this.setState({ modalEdit: !this.state.modalEdit });

    render() {
        const { username, id ,companyName} = this.props
        return (
            <div>
                <Button color="danger" size='sm' onClick={this.toggle}><FiXCircle /></Button>
                <Modal isOpen={this.state.modalEdit} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{username}</ModalHeader>
                    <ModalBody>
                        You confirm deleting User <b>{username}</b> with ID: <b> {id} </b>from <b>{companyName}</b> ?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={()=>this.handleDelete(id, username)}>
                            Confirm
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AdminFormDeleteUser;
