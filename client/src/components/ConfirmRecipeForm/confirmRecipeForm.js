import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class ConfirmRecipeForm extends Component {
    continue = event => {
        event.preventDefault();
        // Process form (send data to the database to save it)
            this.props.nextStep();
    };
    back = event => {
        event.preventDefault();
            this.props.previousStep();
    };
    
    render() {
        const  { 
            values: { recipeName, category, cuisine, prepTimeHours, prepTimeMinutes, cookingTimeHours, cookingTimeMinutes, ingredients, directions, servings } 
        } = this.props;
        
        return(
            <div>

                <Alert variant="success">
                    <Alert.Heading>Confirm Your Recipe!</Alert.Heading>
                    <ListGroup>
                        <ListGroup.Item text={ recipeName }>Recipe Name: { recipeName }</ListGroup.Item>
                        <ListGroup.Item text={ category }>Category: { category }</ListGroup.Item>
                        <ListGroup.Item text={ cuisine }>Cuisine: { cuisine }</ListGroup.Item>
                        <ListGroup.Item >Prep Time: { prepTimeHours } Hours, { prepTimeMinutes } Minutes </ListGroup.Item>
                        <ListGroup.Item >Cooking Time: { cookingTimeHours } Hours, { cookingTimeMinutes } Minutes</ListGroup.Item>
                        <ListGroup.Item text={ "ingredients" }>Ingredients: {  ingredients.map(function(ingredient, index) { return ingredient.Ingredient}).join(",") }</ListGroup.Item> 
                        <ListGroup.Item text={ directions }>Directions: { directions }</ListGroup.Item>
                        <ListGroup.Item text={ servings }>Number of servings: { servings }</ListGroup.Item>
                    </ListGroup>
                    <hr />
                    
                </Alert>

                <Button className="m-2" variant="primary" type="back" onClick={this.back}>
                        Go Back
                </Button>

                <Button className="m-2" variant="primary" type="confirm" onClick={this.continue}>
                        Confirm
                </Button>
               
                
            </div>               

        )
    }
}

export default ConfirmRecipeForm;





