import React from "react";
import { Row, Col } from 'react-bootstrap';
import NavBar from "../navBar/NavBar";
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    state= {
        first_name: this.props.currentUser.first_name,
        last_name: this.props.currentUser.last_name,
        username: this.props.currentUser.username,
        bio: this.props.currentUser.bio,
        email: this.props.currentUser.email
    }

    render() {
        return(<>
            <div className="main-page">
                <Row>
                    <Col>
                <div>
                    <Link to="/kitchen">
                    <img className="main-images" src="https://images.pexels.com/photos/3952043/pexels-photo-3952043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="kitchen"></img>
                    <div className="image-overlay">
                            <div className="image-title">My Kitchen</div>
                        </div>
                    </Link>
                </div>
                </Col>
                <br></br>
                <br></br>
                <Col>
                <div>
                    <Link to="/searchrecipe">
                    <img className="main-images" src="https://images.pexels.com/photos/4049786/pexels-photo-4049786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="search" ></img>
                        <div className="image-overlay">
                            <div className="image-title">Find a Recipe</div>
                        </div>
                    </Link>
                </div>
                </Col>
                <br></br>
                <br></br>
                <Col>
                <div>
                    <Link to="/myrecipes">
                    <img className="main-images" src="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/recipe-box.jpg?itok=dkqZiJ0X" alt="myrecipes"></img>
                    <div className="image-overlay">
                            <div className="image-title">My Recipe Library</div>
                        </div>
                    </Link>
                </div>
                </Col>
                </Row>     
            </div>
            </>
        )
    }
}

export default HomePage;