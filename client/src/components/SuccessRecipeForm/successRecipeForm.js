import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from 'axios'

export class SuccessRecipeForm extends Component {
    continue = event => {
        event.preventDefault();
       console.log("Im successfull");
        console.log(this.props.recipeName);
        // Process form (send data to the database to save it)
           // this.props.nextStep();
    };
    insertRecipe(id,e,values,userId)
    {
        e.preventDefault();
        console.log("Im successfull");
        const recipe = {
            userId:userId,
            recipeName:values.recipeName,
           category :values.category, 
           cuisine :values.cuisine, 
            prepTimeHours:values.prepTimeHours, 
           prepTimeMinutes :values.prepTimeMinutes, 
            cookingTimeHours:values.cookingTimeHours, 
           cookingTimeMinutes:values.cookingTimeMinutes, 
            ingredients:values.ingredients, 
           directions :values.directions, 
           servings :values.servings
          
        }

        axios.post("http://localhost:3001/app/addrecipe", recipe)
        .then(response =>{ console.log(response.data);  })
        

    }
    render() {
        const  { 
            values: { recipeName, category, cuisine, prepTimeHours, prepTimeMinutes, cookingTimeHours, cookingTimeMinutes, ingredients, directions, servings } 
        } = this.props;
        return(
            <div>
    
            <Alert variant="success">
                Congratulations on Adding your recipe
            </Alert>
    
    {/* This needs to be handled so that it can save the recipe as a final step, i am commenting it out now becuse once i click it, it causes an error */}
            <Button className="m-2" variant="primary" type="confirm" onClick={(e) => this.insertRecipe(0,e, this.props.values,this.props.user.userid)}>
                            Finish
                    </Button>
    
            </div>
        )

    }
   
}

export default SuccessRecipeForm;