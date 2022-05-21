import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mt-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              {...register("Product_Name", { required: true, maxLength: 100 })}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Product Image URL</Form.Label>
            <Form.Control
              type="text"
              {...register("Product_Image_URL", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              {...register("Short_Description", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              {...register("Price", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              type="number"
              {...register("Quantity", { required: true, maxLength: 12 })}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control
              type="text"
              {...register("Supplier_Name", { required: true })}
            />
          </Form.Group>
          <Form.Group>
            <Row className="justify-content-center mt-4">
              <Col className="d-grid gap-2">
                <input type="submit" className="btn btn-outline-primary" />
              </Col>
              <Col className="d-grid gap-2">
                <input type="reset" className="btn btn-outline-danger" />
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default AddProduct;
