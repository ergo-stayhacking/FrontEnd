import React, { Component } from "react";
import {Button, Col, Input, Row} from 'react-materialize';
import Modal from 'react-responsive-modal';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };
    
    render() {
		return (
            <div>
                <Button onClick={this.onOpenModal} className='blue'>Log In!</Button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Log In!</h2>
                    <Row>
                        <Input s={6} type="email" label="Email" />
                        <Input s={6} type="password" label="password" />
                        <Button waves='light'>Log In!</Button>
                    </Row>
                </Modal>
            </div>
		);
    }

}

export default Login;