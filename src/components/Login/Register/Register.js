import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './REgister.css'

const Register = () => {
    return (
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6 mt-4">
       <img  className="w-75"src="https://i.ibb.co/ZmLDqFR/register.jpg" alt="" srcset="" />
        </div>
        <div className="col-lg-6">
        <div className="login-form">
                       <h2>Register: Create Account</h2>
                <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> RE TYPE Password</Form.Label>
    <Form.Control type="password" placeholder=" Re Enter Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>

  
  
</Form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button className="btn btn-primary">Google Sign In</button>
            </div>
        </div>
            <div>
        </div>
      </div>
       
   
    );
};

export default Register;