import React, { SyntheticEvent, useState } from 'react';
import { withRouter } from 'react-router';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import API from '../utils/API';
import { AuthContext } from '../context/authcontext';
import { useHistory } from 'react-router-dom';
import { ErrorMessageConstants, Constants } from '../utils/Constants';

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

            if (response.hasOwnProperty('error')) {
                setErrorMessage(ErrorMessageConstants.loginError_invalidLogin)
            }
            else {
                authContext?.setCurrentUser(response);
                history.push("/home")
            }
        }
        
    }

    return (
            <Form className="LoginPage" onSubmit={handleLogin}>
                <h1>{Constants.login_loginHeader}</h1>
                <Form.Group controlId="formGridEmail">
                    <Row>
                        <Col />
                        <Col md={2}>
                            <Form.Control type="email" placeholder={Constants.login_loginEmailPlaceholder} value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </Col>
                        <Col />
                    </Row>
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Row>
                        <Col />
                        <Col md={2}>
                            <Form.Control type="password" placeholder={Constants.login_loginPasswordPlaceholder} value={password} onChange={(event) => setPassword(event.target.value)}/>
                        </Col>
                        <Col />
                    </Row>
                </Form.Group>

                <Row>
                    <Col></Col>
                    <Col md={2}>
                        <div>
                            { errorMessage != "" ? <p>{errorMessage}</p> : null}
                        </div>
                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="success" type="submit">
                            {Constants.login_loginSubmit}
                        </Button>
                    </Col>
                </Row>                

            </Form>    
        )
}

export default withRouter(Login);