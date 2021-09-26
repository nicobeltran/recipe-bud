import React, { useState } from 'react';
import { withRouter } from "react-router"
import { AuthContext } from '../context/authcontext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ErrorMessageConstants, Constants } from '../utils/Constants';
import './Sidebar.css'
import RecipeList from './RecipeList';

const Sidebar = () => {
    const authContext = React.useContext(AuthContext)
    const [searchText, setSearchText] = useState("")

    const [recipes, setRecipes] = useState([])

    return(
        <div>
            <Row className="sidebar-header-row mb-2" noGutters>
                <Col md={1} lg={1}/>
                <Col md={8} lg={8} className="recipe-header-text d-flex">
                    <h1>Recipes</h1>
                </Col>
                <Col className="create-new-button">
                    <Button variant="primary" type="submit">
                        +
                    </Button>
                </Col>
                <Col md={1} lg={1}/>
            </Row>
            <Row>
                <Col md={1} lg={1}/>
                <Col>
                    <Form.Group className="mb-2 searchbar" controlId="formBasicSearch">
                        <Form.Control type="email" placeholder="Search for recipe..." value={searchText} onChange={(event) => setSearchText(event.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={1} lg={1}/>
            </Row>
            <Row>
                <RecipeList recipes={recipes}/>
            </Row>
        </div>
    )
}

export default withRouter(Sidebar)