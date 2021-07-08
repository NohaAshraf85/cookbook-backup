import React from "react";
import Categories from "../../utils/categories.json";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";
import Header from "../../components/Header/header";

function CategoriesPage() {
  return (
    <div className="signup">
      <Header title="Categories"/>
      <FoodCardContainer recipes={Categories} itemColClass={"col-lg-3 col-md-3 col-sm-12"} />
    </div>
  );
}

export default CategoriesPage;
