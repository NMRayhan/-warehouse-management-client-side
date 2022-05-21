import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UpdateProduct = () => {
  const [details, setDetails] = useState([]);
  const {_id} = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/product/details/${_id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          setDetails(data)
          console.log(data)
      });
  }, [_id]);


  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = "http://localhost:5000/addProduct";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((request) => request.json())
      .then((data) => {
        toast("Product Added Successfully");
      });
  };


  return (
    <div>
      <Container>
      <h2 className="text-center text-success fw-bold mt-3">Update Product </h2>
      <ToastContainer />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mt-3">
            <Form.Label>Admin Email</Form.Label>
            <Form.Control
              type="email"
              {...register("Admin_email", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              {...register("Product_Name", { required: true, maxLength: 500 })}
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
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateProduct;
