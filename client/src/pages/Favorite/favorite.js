import React, { useState, useEffect } from "react";
import ProfileMainNav from "../../components/ProfileMainNav/profileMainNav";
import ProfileInfo from "../../components/ProfileInfo/profileInfo";
import axios from "axios";
import Recipes from "../../utils/recipes.json";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";


function Favorite(props) {
    const [favoriteRecipes,getfavoriteRecipes ]=useState('');
    useEffect(() => {
        getFavoriteRecipes();
   }, []);
   const getFavoriteRecipes=()=> {
    axios.post("http://localhost:3001/app/getfavorites", {userId:props.user.userid})
    .then(response =>{ 
        const allRecipes=[];
        const favoriteRecipes=Array.from(response.data);
        for(var i=0;i<Recipes.length;i++)
        {
            for(var j=0;j<favoriteRecipes.length;j++)
            {
                if(Recipes[i].recipeId==favoriteRecipes[j].recipeId)
                allRecipes.push(Recipes[i]);

            }
        }
        
        getfavoriteRecipes(allRecipes);
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
        <FoodCardContainer recipes={Array.from(favoriteRecipes)} itemColClass={"col-lg-3 col-md-3 col-sm-12"}></FoodCardContainer>
           
        </div>
    </div>

    )
}

export default Favorite;