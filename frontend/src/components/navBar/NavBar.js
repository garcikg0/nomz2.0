import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Login from "../logIn/LogIn"

const NavBar = ({ currentUser, handleLogout, handleIsLoggingIn, isLoggingIn, handleCloseLogin }) => {

    const handleLoginClick = (e) => {
        handleIsLoggingIn(e)
        isLoggingIn = !isLoggingIn
        console.log(isLoggingIn)
        if (currentUser === null && isLoggingIn) {
            return <Login isLoggingIn={isLoggingIn} />
        }
    }

    const isHandleCloseLogin = () => {
        this.handleCloseLogin()
    }



    return(
        <Container fluid>
        <Navbar expand="lg" bg="light">
          <Navbar.Brand className="navHeader">Nomz</Navbar.Brand>
          <Nav className="container-fluid">
              {currentUser ? (
                  <Nav.Item className="ml-auto">
                  <Nav className="button-spacing">
                      <Link to="/myrecipes">
                      <Button variant="outline-success">My Recipes</Button>{'   '}
                      </Link>
                      <Link to="/groceries">
                      <Button variant="outline-success">Grocery list</Button>{'   '}
                      </Link>
                      <Button variant="outline-danger">Log Out</Button>
                  </Nav>
              </Nav.Item>
              ) : (
                <Nav.Item className="ml-auto">
                <Nav.Link>
                        <Button variant="success" size="sm" onClick={handleLoginClick}>Log In</Button>{' '}
                    <Link to="/signup">
                        <Button variant="primary" size="sm">Sign Up </Button>
                    </Link>
                </Nav.Link>
          </Nav.Item>     
              )}
          </Nav>
        </Navbar>
        </Container> 
    )
}

export default NavBar;