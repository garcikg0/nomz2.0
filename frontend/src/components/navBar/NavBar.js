import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = ({ currentUser, handleShowLogin }) => {

    const handleLoginClick = (e) => {
        e.preventDefault()
        handleShowLogin()
    };
    console.log(currentUser)
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
                        <Button variant="success" size="sm" onClick={handleLoginClick}>Log In</Button>{' '}
                    <Link to="/signup">
                        <Button variant="primary" size="sm">Sign Up </Button>
                    </Link>
          </Nav.Item>     
              )}
          </Nav>
        </Navbar>
        </Container> 
    )
}

export default NavBar;