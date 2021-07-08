import React from "react";
import ProfileMainNav from "../../components/ProfileMainNav/profileMainNav";
import ProfileInfo from "../../components/ProfileInfo/profileInfo";

function ProfilePage(props) {
    return(
        <>

        <div className="container mt-5">
            <div className="row">
            <ProfileInfo user={props.user}/>
            </div>
            <div className="row">
            <ProfileMainNav />
            </div>
            <div className="row">
                Overview Information
            </div>

        </div>
       
  

        
</>
        


    )
}

export default ProfilePage;