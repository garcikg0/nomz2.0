import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const Login = ({handleLogin, showLoginState, handleShowLogin }) => {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.id;
        
        setLoginData({
            ...loginData,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(r => r.json())
        .then(data => {
            const { user, token } = data
            handleLogin(user)
            localStorage.token = token
        });
        handleShowLogin()
    };
    
    return (
        <Modal 
            size="lg"
            show={showLoginState}
            onHide={handleShowLogin} 
            centered >
                <Modal.Header closeButton>
                    <Modal.Title id="login-modal">Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} controlId="username" onChange={handleChange} >
                        <Form.Label column sm={2}>
                        Username
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control placeholder="Username" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="password" onChange={handleChange} >
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
};

export default Login;