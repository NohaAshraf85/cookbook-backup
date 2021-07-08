import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

class IngredientsList extends Component {
    state={
        amount: "",
        amount1: "",
        unit: "",
        ingredient: ""
    }
    add = event => {
        event.preventDefault();
        console.log("I'm in add event");
         //console.log(amount);
        // console.log(amount1);
        // console.log(unit);
        // console.log(ingredient);


            this.props.values.ingredients.push({Amount: this.state.amount,
                Amount1: this.state.amount1,
                Unit: this.state.unit,
       
                Ingredient: this.state.ingredient,
                });
               this.setState({[this.state.amount]:""});
    };
    deleteRow(index,e) {
        e.preventDefault();
        console.log("I'm in delete event");
        console.log(e);
        this.props.values.ingredients.splice(index, 1);
        this.setState({[this.state.amount]:""});
         //console.log(amount);
        // console.log(amount1);
        // console.log(unit);
        // console.log(ingredient);


            // this.props.values.ingredients.push({Amount: this.state.amount,
            //     Amount1: this.state.amount1,
            //     Unit: this.state.unit,
       
            //     Ingredient: this.state.ingredient,
            //     });
            //    this.setState({[this.state.amount]:""});
    };

    // Handle fields change
    handleAddingIngredients =  input => event => {
        this.setState({ [input]: event.target.value});
    };
    render() {
        const { amount, amount1, unit,  ingredient } = this.state;
        const ingredientvalues = { amount, amount1, unit,  ingredient };

        const { values, handleChange } = this.props;
        
        return(

        <>
        <Form>

            <Row className="mb-3">
            <Form.Group as={Col} md="2" controlId="formGridState">
            <Form.Label>Amount</Form.Label>
            <Form.Control onChange={this.handleAddingIngredients('amount')} 
             as="select">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="formGridState">
            <Form.Label>Amount-1</Form.Label>
            <Form.Control onChange={this.handleAddingIngredients('amount1')} 
            as="select">
                <option>1/2</option>
                <option>1/3</option>
                <option>1/4</option>
                <option>1/8</option>
                <option>2/3</option>
                <option>3/4</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="formGridState">
            <Form.Label>Unit</Form.Label>
            <Form.Control onChange={this.handleAddingIngredients('unit')} 
             as="select">
                <option>Cup</option>
                <option>g</option>
                <option>fl oz</option>
                <option>ml</option>
                <option>oz</option>
                <option>tsp</option>
                <option>tbsp</option>
                <option>bag</option>
                <option>bar</option>
                <option>bulb</option>
                <option>clove</option>
                <option>cob</option>
                <option>dash</option>
                <option>drop</option>
                <option>gallon</option>
                <option>head</option>
                <option>kg</option>
                <option>lb</option>
                <option>leaf</option>
                <option>package</option>
                <option>pinch</option>
                <option>pint</option>
                <option>quart</option>
                <option>scoop</option>
                <option>sheet</option>
                <option>slice</option>
                <option>spring</option>
                <option>stalk</option>
                <option>stick</option>
                <option>strip</option>
                <option>tea bag</option>
                
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="formGridZip">
            <Form.Label>Ingredient</Form.Label>
            <Form.Control onChange={this.handleAddingIngredients('ingredient')} 
             />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="formGridZip">
           
            <Button className="m-2" variant="primary"  onClick={this.add}>
                        Add
                    </Button>
            </Form.Group>
            </Row>


           
        </Form>
        <ol>
        {values.ingredients.map((ingredient, index) => (
           <li key={index} className="ingredientItem">
               <div className="row">
                   
                   <div className="col-2">
                   {ingredient.Amount}
                   </div>
                   <div className="col-2">
                   {ingredient.Amount1}
                   </div>
                   <div className="col-2">
                   {ingredient.Unit}
                   </div>
                   <div className="col-2">
                   {ingredient.Ingredient}
                   </div>
                   <div className="col-2">
                   <Button className="m-2" variant="primary" onClick={(e) => this.deleteRow(index, e)}  >
                        Delete
                    </Button>
                   </div>
               </div>
               
              

           </li>
          ))}
        </ol>

        </>

    )
}
}

export default IngredientsList;