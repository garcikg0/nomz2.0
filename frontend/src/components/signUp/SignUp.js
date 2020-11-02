import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

class SignUp extends React.Component {
    state = {
        first_name: "",
        last_name: "",
        username: "",
        bio: "",
        email: "",
        password: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDeafult()

    }

    render() {
        const { first_name, last_name, username, bio, email, password} = this.state

        return(
            <div>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} name="first_name" controlId="signUpFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First Name" />
                        </Form.Group>
                        <Form.Group as={Col} name="last_name" controlId="signUpLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group name="email" controlId="signUpEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Enter your email address" />
                    </Form.Group>

                    <Form.Group name="bio" controlId="signUpBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Tell us a little about yourself" />
                    </Form.Group>

                    <Form.Group name="username" controlId="signUpUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter your username" />
                    </Form.Group>

                    <Form.Group name="password" controlId="signUpPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Enter your password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SignUp;