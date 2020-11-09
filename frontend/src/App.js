import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Card, CardDeck, Container, Jumbotron } from 'react-bootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import bvideo from "./backgroundVideo.mp4";
import NavBar from "./components/navBar/NavBar";
import SignUp from './components/signUp/SignUp';
import HomePage from './components/homePage/HomePage';
import Login from './components/logIn/LogIn';

class App extends React.Component {

  state = {
    currentUser: null,
    isLoggingIn: false
  }

  componentDidMount() {
    if (localStorage.token) {
      debugger
      fetch(`http://localhost:3000/autologin`, {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then (r => r.json())
      .then(data => {
        if (!data.error)
        this.handleLogin(data)
      })
    }
  }

  handleIsLoggingIn = (e) => {
    let clicked = !this.state.isLoggingIn
    this.setState({
      isLoggingIn: clicked
    })
  }

  handleCloseLogin = () => {
    this.setState({
      isLoggingIn: false
    })
  }

  handleLogin = currentUser => {
    debugger
    this.setState({ currentUser }, () => {
      debugger
      this.props.history.push('/home')
    })
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.setState({
      currentUser: null
    })
  }
  
  render(){
    console.log(this.state.isLoggingIn)
  return (
  <>
  <div>
  <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout} handleIsLoggingIn={this.handleIsLoggingIn} isLoggingIn={this.state.isLoggingIn} />
  <Login isLoggingIn={this.state.isLoggingIn} handleCloseLogin={this.handleCloseLogin}/>
  </div>
  <Switch>
      <Route path='/signup' exact>
        <SignUp handleLogin={this.handleLogin}/>
      </Route>
      <Route path='/home' exact>
        {this.state.currentUser ? <HomePage currentUser={this.state.currentUser} updateUser={this.updateUser} /> : <Redirect to='/' />}
      </Route>
      <Route path='/' exact>
        <div>
          <Container fluid>
          <Jumbotron>
            <video className="videoTag" autoPlay loop muted>
              <source src={bvideo} type="video/mp4"/>
            </video>
          </Jumbotron>
          </Container>
        </div>
        <div>
          <Container fluid>
            <h1 className="homeHeader">Nomz</h1>
            <h2 className="homeSubHeader">Your time-saving recipe and ingredient management tool</h2>
          </Container>
        </div>
        <br></br>
        <div>
          <Container fluid>
          <CardDeck>
            <Card className="home-card">
              <Card.Img variant="top" src="https://static.thenounproject.com/png/2174492-200.png" />
              <Card.Body >
                <Card.Title>Your Kitchen and Grocery List</Card.Title>
                <hr></hr>
                <Card.Text>
                  Catalog and manage ingredients in Your Kitchen{' '}
                <br></br>
                  "Running Low" ingredients automatically added to your Grocery List{' '}
                  <br></br>
                  Easily add ingredients in your Grocery List to Your Kitchen
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="home-card">
              <Card.Img variant="top" className="homePage-card-img-top" src="https://static.thenounproject.com/png/1001683-200.png" />
              <Card.Body>
                <Card.Title>Recipe Search</Card.Title>
                <hr></hr>
                <Card.Text>
                  Search over 2 million recipes onlilne 
                  <br></br>
                  Visit the recipe's webpage for more details in just one click
                  <br></br>
                  Easily add your favorite finds to your Recipe Library
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="home-card">
              <Card.Img variant="top" className="homePage-card-img-top-2" src="https://static.thenounproject.com/png/1132473-200.png" />
              <Card.Body>
                <Card.Title>Your Recipe Library</Card.Title>
                <hr></hr>
                <Card.Text>
                  Your favorite recipes - regardless of web address - stored in one place
                  <br></br>
                  Spend less time seeing if you have all the ingredients needed for a recipe
                  <br></br>
                  List view of a recipe's ingredients followed by any matches to available ingredients in Your Kitchen
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          </Container>
        </div>
    </Route>
    </Switch>
  </>
  );
};
};

export default withRouter(App);


