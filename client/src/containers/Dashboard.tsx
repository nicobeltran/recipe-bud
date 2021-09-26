import React from 'react';
import { withRouter } from "react-router"
import { AuthContext } from '../context/authcontext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ErrorMessageConstants, Constants } from '../utils/Constants';
import './Dashboard.css';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const authContext = React.useContext(AuthContext);

    return(
        <Container fluid>
            <Row>
                <Col md={4} lg={4} className="sidebar-column">
                    <Sidebar/>
                </Col>
                <Col className="main-column">
                </Col>
            </Row>
        </Container>
        
    )
}

export default withRouter(Dashboard)