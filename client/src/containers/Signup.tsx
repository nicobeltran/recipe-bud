import React, { SyntheticEvent, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { withRouter } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { ErrorMessageConstants, Constants } from '../utils/Constants';
import API from '../utils/API';

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const history = useHistory();

    const handleSubmit = async (event : SyntheticEvent) => {
        event.preventDefault()

        if (email == "" || password == "" || name == "") {
            setErrorMessage(ErrorMessageConstants.loginError_emailOrPasswordEmpty)
        }
        else {
            setErrorMessage("")
            const response = await API.signup({email, password, name});

            if (response) {
                if (response.hasOwnProperty('error')) {
                    setErrorMessage("Error creating user.")
                }
                else {
                    history.push("/login")
                    // TODO: show success somehow
                }
            }
            else {
                // TODO: show error
            }
        }
        
    }

    return (
        <Container>
            {/* todo change classname */}
            <Form className="LoginForm" onSubmit={handleSubmit}>
                <h1 className="mb-3">Sign up for RecipeBud</h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Full name" value={name} onChange={(event) => setName(event.target.value)} />
                </Form.Group>
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
                            Submit
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </Col>
                </Row>

            </Form>
        </Container>
    )
}

export default withRouter(Signup)