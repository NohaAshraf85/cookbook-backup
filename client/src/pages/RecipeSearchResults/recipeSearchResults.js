import React from "react";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";
import Filter from "../../components/Filter/filter";
import SearchBox from "../../components/SearchBox/searchBox";

import "./recipeSearchResults.css";
import { propTypes } from "react-bootstrap/esm/Image";
import Header from "../../components/Header/header";

function RecipeSearchResults(props) {
  return (
    <div className="container-fluid">
      <Header title="Recipe Search Results" />
      <br />
      {/* <SearchBox className="searchBox" onSearch={} onText={}/> */}
      <div className="row">
      <div className="col-12 col-md-4">
      <Filter className="filterComponent" onChange={props.onFilterChange} filter={props.filter}/>
      </div>
      <div className="col-12 col-md-8">
      <FoodCardContainer className="recipeCards" onRecipeClick={props.onRecipeClick} recipes={props.recipes} user={props.user} itemColClass={"col-12 col-md-4"}/>
    </div>
    </div>
      </div>
  );
}

export default RecipeSearchResults;
