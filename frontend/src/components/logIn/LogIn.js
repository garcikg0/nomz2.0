import React from 'react';
import { Modal } from 'react-bootstrap';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        isLoggingIn: this.props.isLoggingIn
    };

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return(
            <Modal 
            size="lg"
            show={isLoggingIn}
            onHide={()=> !this.state.isLoggingIn } 
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
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
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
}

export default Login;