import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/hero";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";
import API from "../../utils/API";
import Categories from "../../utils/categories.json";
import Recipes from "../../utils/recipes.json";
import Header from "../../components/Header/header";
import ShowMoreButton from "../../components/ShowMoreButton/showMoreButton";


function Home(props) {
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
    <div className="home">
      <Hero />
      <Header title="Recipes"/>
      <FoodCardContainer onRecipeClick={props.onRecipeClick} recipes={Recipes} user={props.user} itemColClass={"col-lg-3 col-md-3 col-sm-12"} />
      {/* {recipes.slice(0, 4).map((recipe) => (
        <FoodCard img={recipe.image} name={recipe.name} id={recipe.id} />
      ))} */}
      <ShowMoreButton more="/recipes" title="Recipes" />
      <Header title="Categories"/>
      <FoodCardContainer recipes={Categories} user={props.user} itemColClass={"col-lg-3 col-md-3 col-sm-12"} />
      <ShowMoreButton more="/categories" title="Categories" />
    </div>
  );
}

export default Home;
