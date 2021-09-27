import React, { useState, useEffect, FC } from 'react';
import { withRouter } from "react-router"
import { AuthContext } from '../context/authcontext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ErrorMessageConstants, Constants } from '../utils/Constants';
import './Sidebar.css'
import RecipeList from './RecipeList';
import API from '../utils/API';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import { SidebarProps } from '../types/SidebarTypes';

const Sidebar: FC<SidebarProps> = ({recipes}) : JSX.Element => {
    const authContext = React.useContext(AuthContext)

    const [searchText, setSearchText] = useState("")

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
            <Row className="mb-3">
                <Col md={1} lg={1}/>
                <Col>
                    <Form.Group className="mb-2 searchbar" controlId="formBasicSearch">
                        <Form.Control type="text" placeholder="Search for recipe..." value={searchText} onChange={(event) => setSearchText(event.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={1} lg={1}/>
            </Row>
            <Row>
                <Col md={1} lg={1}/>
                <RecipeList recipes={recipes}/>
                <Col md={1} lg={1}/>
            </Row>
        </div>
    )
}

export default Sidebar