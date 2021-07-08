import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./loginForm.css"

function LoginForm(props) {
  const [state , setState] = useState({
      email : "",
      password : "",
      successMessage: null
  })
  const handleChange = (e) => {
      const {id , value} = e.target   
      setState(prevState => ({
          ...prevState,
          [id] : value
      }))
  }

  const handleSubmitClick = (e) => {
      e.preventDefault();
      const payload={
          "email":state.email,
          "password":state.password,
      }

      axios.post("http://localhost:3001/app/login", payload)
        .then(response =>{ console.log(response.data); props.setUserInfo(
            {userid:response.data._id, 
                email: response.data.email,
            username:  response.data.username,
            password:  response.data.password,
            abilityLevel:  response.data.abilityLevel}) })
        
    //   axios.post(API_BASE_URL+'/user/login', payload)
    //       .then(function (response) {
    //           if(response.status === 200){
    //               setState(prevState => ({
    //                   ...prevState,
    //                   'successMessage' : 'Login successful. Redirecting to home page..'
    //               }))
    //               localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
    //               redirectToHome();
    //             //   props.showError(null)
    //           }
    //           else if(response.code === 204){
    //             //   props.showError("Username and password do not match");
    //           }
    //           else{
    //             //   props.showError("Username does not exists");
    //           }
    //       })
          .catch(function (error) {
              console.log(error);
          });
  }

//   const redirectToHome = () => {
//     //   props.updateTitle('Home')
//     //   props.history.push('/home');
//   }

  return(
      <div className="login">
          <Form>
              <div className="form-group text-left">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" 
                     className="form-control" 
                     id="email" 
                     aria-describedby="emailHelp" 
                     placeholder="Enter email" 
                     value={state.email}
                     onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group text-left">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" 
                     className="form-control" 
                     id="password" 
                     placeholder="Password"
                     value={state.password}
                     onChange={handleChange} 
              />
              </div>
              <div className="form-check">
              </div>
              <Button variant="primary" type="submit" onClick={handleSubmitClick}>
                  Submit
              </Button>
          </Form>
          <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
              {state.successMessage}
          </div>
          <div className="signupMessage">
              <span>Dont have an account? </span>
              <Link to="/signup">Signup</Link>
 
          </div>
      </div>
  )
}

export default withRouter(LoginForm);