import React from 'react';
// import { Button, Col, Form, Row } from 'react-bootstrap';


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
        e.preventDefault()
        fetch("http://localhost:3000/users" , {
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
    }

    render() {
        const { first_name, last_name, username, bio, email, password} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>

                <label>First Name</label>
                <input
                type="text"
                name="first_name"
                autoComplete="off"
                value={first_name}
                onChange={this.handleChange}
                />

                <label>Last Name</label>
                <input
                type="text"
                name="last_name"
                autoComplete="off"
                value={last_name}
                onChange={this.handleChange}
                />

                <label>Email</label>
                <input
                type="text"
                name="email"
                autoComplete="off"
                value={email}
                onChange={this.handleChange}
                />

                <label>Bio</label>
                <textarea
                type="text"
                name="bio"
                autoComplete="off"
                value={bio}
                onChange={this.handleChange}
                />

                <label>Username</label>
                <input
                type="text"
                name="username"
                autoComplete="off"
                value={username}
                onChange={this.handleChange}
                />

                <label>Password</label>
                <input
                type="text"
                name="password"
                autoComplete="off"
                value={password}
                onChange={this.handleChange}
                />

                <input type="submit" value="Signup" />
            </form>
        )
    }
}

export default SignUp;

{/* <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="first_name" onChange={this.handleChange}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="last_name" onChange={this.handleChange}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="email" onChange={this.handleChange}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Enter your email address" />
                    </Form.Group>

                    <Form.Group controlId="bio" onChange={this.handleChange}>
                        <Form.Label>Bio</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Tell us a little about yourself" />
                    </Form.Group>

                    <Form.Group as={Row} controlId="username" onChange={this.handleChange}>
                        <Form.Label column sm={2}>Username</Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Enter your username" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="password" onChange={this.handleChange}>
                        <Form.Label column sm={2}>Password</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" type="submit">Sign Up</Button>
                </Form>
            </div> */}