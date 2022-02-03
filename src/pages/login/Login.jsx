import React, {Component} from 'react'
import "./login.css";
import { Link } from "react-router-dom";
import {Container, Row, Col, Button, Form } from "react-bootstrap"
import LoginImg from "../../images/undraw_remotely_2j6y.svg";

class Login extends Component {
    render () {
    return(
     
        <div className="login">
        <> 
        <Container>
           <Row>
               <Col lg={6} sm={12}>
                    <div className="LoginBox p-5">
                        <img className='LoginImg' src={LoginImg} alt="loginimage"/>
                    <Form>
  <Form.Group>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group>
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <a className="" href="#">Forgot Password</a>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                        </div>  
               </Col>
           </Row>

        </Container>
        </>
        </div>
    
    )
    }
 }

  export default Login;