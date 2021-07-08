import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./recipeBasicsFormSection.css";
import UploadImage from "../../components/UploadImage/uploadImage";

export class RecipeBasicsFormSection extends Component {
    continue = event => {
        event.preventDefault();
            this.props.nextStep();
    };
    render() {
        const  { values, handleChange } = this.props;
        return(
            <div className="p-5 shadow-lg p-3 mb-5 bg-body rounded">

                <UploadImage />

                <Form className="form-width mt-5">
    
                    <Form.Group controlId="formBasicName">
                        <Form.Label className="font">Name Your Recipe</Form.Label>
                        <Form.Control onChange={handleChange('recipeName')} 
                        defaultValue={values.recipeName} type="text" placeholder="Recipe name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="font">Category</Form.Label>
                        <Form.Control onChange={handleChange('category')} 
                        defaultValue={values.category} as="select">
                        <option>Category</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Snack</option>
                        <option>Dinner</option>
                        <option>Desert</option>
                        <option>Appetizer</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="font">Cuisine</Form.Label>
                    <Form.Control onChange={handleChange('cuisine')} 
                        defaultValue={values.cuisine} type="text" placeholder="Cuisine Type ex. Italian" />

                </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="font">Number of Servings</Form.Label>
                            <Form.Control onChange={handleChange('servings')} 
                        defaultValue={values.servings} as="select" >
                            <option>Servings</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                    </Form.Group>

                    <Form.Label mb-2 mt-2 className="font">Prep Time</Form.Label>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridHours">
                        <Form.Label className="font">Hours</Form.Label>
                        <Form.Control onChange={handleChange('prepTimeHours')} 
                        defaultValue={values.prepTimeHours} as="select" >
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMinutes">
                        <Form.Label className="font">Minutes</Form.Label>
                        <Form.Control onChange={handleChange('prepTimeMinutes')} 
                        defaultValue={values.prepTimeMinutes} as="select" >
                            <option>0</option>
                            <option>5</option>
                            <option>10</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Label mb-2 mt-2 className="font">Cooking Time</Form.Label>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridHours">
                        <Form.Label className="font">Hours</Form.Label>
                        <Form.Control onChange={handleChange('cookingTimeHours')} 
                        defaultValue={values.cookingTimeHours} as="select" >
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMinutes">
                        <Form.Label className="font">Minutes</Form.Label>
                        <Form.Control onChange={handleChange('cookingTimeMinutes')} 
                        defaultValue={values.cookingTimeMinutes} as="select" >
                            <option>0</option>
                            <option>5</option>
                            <option>10</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Button className="m-2" variant="primary" type="continue" onClick={this.continue}>
                        Continue
                    </Button>
                </Form>


            </div>               

        )
    }
}

export default RecipeBasicsFormSection;


