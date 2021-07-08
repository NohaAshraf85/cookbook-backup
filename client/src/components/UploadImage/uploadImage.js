import React from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

function UploadImage() {
  return(
    <>

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" rounded />
          </Col>
        </Row>
      </Container>

      <Form.Group controlId="formFile" className="mb-3 mt-5 mb-5">
        <Form.Label className="font">Upload your recipe image here</Form.Label>
        <Form.Control className="mt-3" type="file" />
      </Form.Group>

      <Button variant="primary" type="submit" value="Submit">Upload</Button>{' '}


    </>

  )
}

export default UploadImage;