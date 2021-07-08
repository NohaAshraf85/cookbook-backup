import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './filter.css'


function Filter(props) {
    return (
        <div>
            <br/>
  <Card >
    <Card.Body>
      <Form className="filterForm">
            <div className="filter">
             <h3>Filter Recipe</h3>
           </div>   
            <br/>
      <Form.Group >
        <Form.Control name="ingredients" type="text" placeholder="Main Ingredient:" onChange={props.onChange} value={props.filter.ingredients}/>
      </Form.Group>
            <br/>
      <Form.Group>
        <Form.Control name="cuisine" type="text" placeholder="Cuisine Type:" onChange={props.onChange} value={props.filter.cuisine}/>
      </Form.Group>
            <br/>
      <Form.Group> 
        <Form.Control name="category" type="text" placeholder="Meal Type:" onChange={props.onChange} value={props.filter.category}/>
      </Form.Group>
    </Form>
            <br/>
    <Button className= "filterButton1" variant="secondary" size="sm" onClick={props.onChange} name="clearButton">
      Clear
    </Button>
    </Card.Body>
  </Card>
           </div>
)
}

export default Filter
