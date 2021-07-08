import "./addRecipeForm.css";
import React, { Component } from "react";
import RecipeBasicsFormSection from "../../components/RecipeBasicsFormSection/recipeBasicsFormSection";
import RecipeIngredientsFormSection from "../../components/RecipeIngredientsFormSection/recipeIngredientsFormSection";
import RecipeStepsFormSection from "../../components/RecipeStepsFormSection/recipeStepsFormSection";
import ConfirmRecipeForm from "../../components/ConfirmRecipeForm/confirmRecipeForm";
import SuccessRecipeForm from "../../components/SuccessRecipeForm/successRecipeForm";

export class AddRecipeForm extends Component {
    state={
        step: 1,
        recipeName: "",
        category: "",
        cuisine: "",
        prepTimeHours: "",
        prepTimeMinutes: "",
        cookingTimeHours: "",
        cookingTimeMinutes: "",
        ingredients: [],
        directions: "",
        servings: ""
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go Back to previous step
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange =  input => event => {
        this.setState({ [input]: event.target.value});
    };


    render() {

        const { step } = this.state;
        const { recipeName, category, cuisine, prepTimeHours, prepTimeMinutes, cookingTimeHours, cookingTimeMinutes, ingredients, directions, servings } = this.state;
        const values = { recipeName, category, cuisine, prepTimeHours, prepTimeMinutes, cookingTimeHours, cookingTimeMinutes, ingredients, directions, servings };
       
        switch(step) {
            case 1:
                return (
                    <RecipeBasicsFormSection 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values} />    
                )
            case 2:
                return (
                    <RecipeIngredientsFormSection
                        nextStep = {this.nextStep}
                        previousStep = {this.previousStep}
                        handleChange = {this.handleChange}
                        values = {values} />
                )
            case 3:
                return (
                    <RecipeStepsFormSection 
                        nextStep = {this.nextStep}
                        previousStep = {this.previousStep}
                        handleChange = {this.handleChange}
                        values = {values} />
                )
            case 4:
                return (
                    <ConfirmRecipeForm 
                        nextStep = {this.nextStep}
                        previousStep = {this.previousStep}
                        values = {values}/>
                )
            case 5:
                return (
                    <SuccessRecipeForm  values = {values} user={this.props.user} />
                )

        }
    }
}

export default AddRecipeForm;

