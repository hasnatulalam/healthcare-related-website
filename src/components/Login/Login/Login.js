import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hoocks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/services';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
 
    return (
      <div className="row">
        <div className="col-md-4 col-sm-12 col-lg-6 ">
          
            <img className="w-50 h-100 mt-4" src="https://i.ibb.co/vd9kb3b/login.jpg" alt="" srcset=""  />
          

        </div>
        <div className="col-md-6 col-sm-12 col-lg-6">
         <div className="login-form"> 
        <div>
            <h2>Login</h2>
            <Form>
  <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted ">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <div className="">
  <button className="btn btn-primary"> Submit</button>
     </div>
 

  
  
</Form>
            <p className="text-primary"> new to call Doctor Website <Link to="/register">Create Account</Link></p>
            <div>-------or----------</div>
            <button
                className="btn btn-primary"
                onClick={handleGoogleLogin}
            >Google Sign In</button>
        </div>
    </div>
          </div>
      </div> 
        

    );
};

export default Login;