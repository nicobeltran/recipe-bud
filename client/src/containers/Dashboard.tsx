import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router"
import { AuthContext } from '../context/authcontext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ErrorMessageConstants, Constants } from '../utils/Constants';
import './Dashboard.css';
import Sidebar from '../components/Sidebar';
import { useRouteMatch, useParams } from 'react-router-dom';
import API from '../utils/API';
import { Recipe, RecipeRoute } from '../types/RecipeTypes';
import { Switch, Route } from "react-router-dom";


const Dashboard = () => {
    const authContext = React.useContext(AuthContext);
    const [recipes, setRecipes] = useState([])

    let { path, url } = useRouteMatch();

    useEffect(() => {
        fetchRecipes();
        }, [])

    async function fetchRecipes() {
        const response = await API.getUserRecipes(authContext!.currentUser.user_id)

        if (response) {
            if (response.hasOwnProperty('error')) {
                // show error
            }
            else {
                setRecipes(response)

            }
        }
        else {
            // show error
        }
    }

    return(
        <Container fluid>
            <Row>
                <Col md={4} lg={4} className="sidebar-column">
                    <Sidebar recipes={recipes}/>
                </Col>
                <Col className="main-column">
                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a recipe.</h3>
                        </Route>
                        <Route path={`${path}/:recipeId`}>
                            <RecipeMain />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
        
    )
}

interface Test {
    recipeId: string
}

function RecipeMain() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let params: Test = useParams();
  
    return (
      <div>
        <h3>{params.recipeId}</h3>
      </div>
    );
  }

export default withRouter(Dashboard)