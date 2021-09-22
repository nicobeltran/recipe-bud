import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [email, setEmail] = useState("")

    return (
            <Form className="LoginPage" >
                <h1>Login to Recipe Bud</h1>
                <Form.Group controlId="formGridEmail">
                    <Row>
                        <Col />
                        <Col md={2}>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </Col>
                        <Col />
                    </Row>
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Row>
                        <Col />
                        <Col md={2}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                        <Col />
                    </Row>
                </Form.Group>

                {/* <Row>
                    <Col></Col>
                    <Col md={2}>
                        <Alert key={0} variant="danger" >
                            Invalid login
                        </Alert>
                    </Col>
                    <Col></Col>
                </Row> */}

                <Row>
                    <Col>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>                

            </Form>    
        )
}

export default withRouter(Login);