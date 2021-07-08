import React from "react";
import LoginForm from "../../components/LoginForm/loginForm"

function Login(props) {
    return(
        <div className= "Login">
        <LoginForm user={props.user} setUserInfo={props.setUserInfo}/>
        </div>
    );
}

export default Login