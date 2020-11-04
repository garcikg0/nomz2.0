import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        show: this.props.isLoggingIn
    };

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    };

    showLogIn = () => {
        if (this.state.show === false && this.props.isLoggingIn === true) {
            let newShow = this.props.isLoggingIn
            this.setState({
                show: newShow
            })
        } 
    }

    handleCloseLogin = () => {
            this.setState({
                show: false
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(data => {
            const { user, token } = data
            this.props.handleLogin(user)
            localStorage.token = token
        })
    };

    render() {
        this.showLogIn()
        console.log(this.state.show)
        return(
            <Modal 
            size="lg"
            show={this.state.show}
            onHide={() => this.handleCloseLogin} 
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="login-modal">
                        Log In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Username
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control placeholder="Username" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Button type="submit">Sign In </Button>
                    </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            
        )
    }
};

export default Login;