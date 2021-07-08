import React from "react";
import ProfileMainNav from "../../components/ProfileMainNav/profileMainNav";
import ProfileInfo from "../../components/ProfileInfo/profileInfo";
// import AddRecipeForm from "../../components/AddRecipeForm/addRecipeForm";
import { AddRecipeForm } from "../../components/AddRecipeForm/addRecipeForm";



function Addrecipe(props) {
    return(
        <div className="container mt-5">
        <div className="row">
            <ProfileInfo user={props.user}/>
        </div>
        <div className="row">
            <ProfileMainNav />
        </div>
        <div className="row flex-column">
         <AddRecipeForm user={props.user} />
        </div>
    </div>
    )
}

export default Addrecipe;