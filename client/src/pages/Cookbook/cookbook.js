import React, { useState, useEffect } from "react";
import ProfileMainNav from "../../components/ProfileMainNav/profileMainNav";
import ProfileInfo from "../../components/ProfileInfo/profileInfo";
import axios from "axios";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";


function Cookbook(props) {
    const [cookbookRecipes,getCookbookRecipes ]=useState('');

    useEffect(() => {
        getAllCookbookRecipes();
   }, []);
   const getAllCookbookRecipes=()=> {
    axios.post("http://localhost:3001/app/getrecipes", {userId:props.user.userid})
    .then(response =>{ 
        const allRecipes=response.data;
        getCookbookRecipes(allRecipes);
        console.log(response.data); 
       

    }).catch(error => console.error(`Error: ${error}`));
   }
 
    return(
        <div className="container mt-5">
            <div className="row">
            <ProfileInfo user={props.user}></ProfileInfo>
            </div>
            <div className="row">
            <ProfileMainNav></ProfileMainNav>
            </div>
            <div className="row">

           
            <FoodCardContainer recipes={Array.from(cookbookRecipes)} itemColClass={"col-lg-3 col-md-3 col-sm-12"}></FoodCardContainer>
            </div>
        </div>

    )
}

export default Cookbook;