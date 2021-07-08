import React from "react";
import "./FoodCardContainer.css";
import FoodCardBody from "./FoodCardBody";

function FoodCardContainer(props) {
  return (
     
        <div className="container">
            <div className="row my-5 px-4">
              {props.recipes.map((recipe, index) => (
                <FoodCardBody onRecipeClick={props.onRecipeClick} key={index} recipeId={recipe.recipeId} img={recipe.image} name={recipe.name} recipe={recipe} user={props.user} itemColClass={props.itemColClass}/>
              ))}
            </div>
        </div>
        
     
  );
}

export default FoodCardContainer;
