import React from "react";
import Card from "react-bootstrap/Card";
function RecipeDetailsBody(props) {
    return(
        <div className="RecipeDetailSideBar">
           <Card>
            <Card.Body>
                <Card.Title>Ingredients</Card.Title>
                <Card.Text>
                <ol>
                    {props?.recipe?.ingredients?.map((ingredient, index) => {
                        return   <li key={index}>{ingredient}</li>
                    })}
                    
                </ol>
                </Card.Text>
            
            

            <Card.Title>Directions</Card.Title>
                <Card.Text>
                <ol>
                {props?.recipe?.instructions?.map((instruction, index) => {
                        return   <li key={index}>{instruction}</li>
                    })}
                </ol>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}
export default RecipeDetailsBody;