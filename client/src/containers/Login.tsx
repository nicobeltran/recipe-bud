import React, { SyntheticEvent, useState } from 'react';
import { withRouter } from 'react-router';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import API from '../utils/API';
import { AuthContext } from '../context/authcontext';
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessageConstants, Constants } from '../utils/Constants';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const authContext = React.useContext(AuthContext);
    const history = useHistory();

    const handleLogin = async (event : SyntheticEvent) => {
        event.preventDefault()

        if (email == "" || password == "") {
            setErrorMessage(ErrorMessageConstants.loginError_emailOrPasswordEmpty)
        }
        else {
            setErrorMessage("")
            const response = await API.login({email, password});

            if (response) {
                if (response.hasOwnProperty('error')) {
                    setErrorMessage(ErrorMessageConstants.loginError_invalidLogin)
                }
                else {
                    authContext?.setCurrentUser(response);
                    history.push("/dashboard")
                }
            }
            else {
                // show error
            }
            
        }
        
    }

    return (
        <Container>
            <Form className="LoginForm" onSubmit={handleLogin}>
                <h1 className="mb-3">{Constants.login_loginHeader}</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="FormLabel">Email address</Form.Label>
                    <Form.Control type="email" placeholder={Constants.login_loginEmailPlaceholder} value={email} onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder={Constants.login_loginPasswordPlaceholder} value={password} onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                <Row className="mb-3">
                    <Col md={3} />
                    <Col>
                        <Alert key={0} variant='danger' show={errorMessage != ""}>
                            {errorMessage != "" ? <p>{errorMessage}</p> : null}
                        </Alert>
                    </Col>
                    <Col md={3} />
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Button variant="primary" type="submit">
                            {Constants.login_loginSubmit}
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Link to="/signup">Sign up for RecipeBud</Link>
                    </Col>
                </Row>

            </Form>
        </Container>
            

        )
}

export default withRouter(Login);