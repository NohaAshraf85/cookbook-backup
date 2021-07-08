import React, { useState, useEffect } from "react";
import "./recipes.css";
import API from "../../utils/API";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";
import Header from "../../components/Header/header";



function Recipes(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  function loadRecipes() {
    API.getRecipes()
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="recipes">
      <Header title="Recipes"/>
      <FoodCardContainer onRecipeClick={props.onRecipeClick} recipes={recipes} itemColClass={"col-lg-3 col-md-3 col-sm-12"} user={props.user} />
    </div>
  );
}

export default Recipes;
