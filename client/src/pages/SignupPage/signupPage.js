import React from "react";
import Signup from "../../components/Signup/signup";
function SignupPage(props){
    return(
        
        <div className="signup">
            <Signup user={props.user} setUserInfo={props.setUserInfo}/>
            

        </div>
    )
}

export default SignupPage