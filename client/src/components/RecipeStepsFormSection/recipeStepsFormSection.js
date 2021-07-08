import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class RecipeStepsFormSection extends Component {
    continue = event => {
        event.preventDefault();
            this.props.nextStep();
    };
    back = event => {
        event.preventDefault();
            this.props.previousStep();
    };
    render() {
        const  { values, handleChange } = this.props;
        return(
            <div className="p-5 shadow-lg p-3 mb-5 bg-body rounded">

                <Form className="form-width mt-5">
    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="font">Directions</Form.Label>
                        <Form.Control onChange={handleChange('directions')}
                        defaultValue={values.directions} as="textarea" rows={10} />
                    </Form.Group>
                    <Button className="m-2" variant="primary" type="back" onClick={this.back}>
                        Go Back
                    </Button>
                    <Button className="m-2" variant="primary" type="continue" onClick={this.continue}>
                        Continue
                    </Button>
                </Form>


            </div>               

        )
    }
}

export default RecipeStepsFormSection;




