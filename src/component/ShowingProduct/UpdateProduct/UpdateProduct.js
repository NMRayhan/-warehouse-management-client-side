import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [details, setDetails] = useState([]);
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/product/details/${_id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });
  }, [_id]);

  const handleNameChange = (e) => {
    const { Product_Name, ...rest } = details;
    const newName = e.target.value;
    const newDetails = { Product_Name: newName, ...rest };
    setDetails(newDetails);
  };
  const handleImgURLChange = (e) => {
    const { Product_Image_URL, ...rest } = details;
    const newName = e.target.value;
    const newDetails = { Product_Image_URL: newName, ...rest };
    setDetails(newDetails);
  };

  const handleDescriptionChange = (e) => {
    const { Short_Description, ...rest } = details;
    const newName = e.target.value;
    const newDetails = { Short_Description: newName, ...rest };
    setDetails(newDetails);
  };

  const handlePriceChange = (e) => {
    const { Price, ...rest } = details;
    const newName = e.target.value;
    const newDetails = { Price: newName, ...rest };
    setDetails(newDetails);
  };

  const handleQuantityChange = (e) => {
    const { Quantity, ...rest } = details;
    const newName = e.target.value;
    const newDetails = { Quantity: newName, ...rest };
    setDetails(newDetails);
  };

  const handleSupplierChange = (e) => {
    const { Supplier_Name, ...rest } = details;
    const newName = e.target.value;
    const newDetails = { Supplier_Name: newName, ...rest };
    setDetails(newDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const Admin_email = event.target.Admin_email.value;
    const Product_Name = event.target.Product_Name.value;
    const Supplier_Name = event.target.Supplier_Name.value;
    const Quantity = event.target.Quantity.value;
    const Price = event.target.Price.value;
    const Short_Description = event.target.Short_Description.value;
    const Product_Image_URL = event.target.Product_Image_URL.value;

    const data = {
      Product_Name: Product_Name,
      Product_Image_URL: Product_Image_URL,
      Short_Description: Short_Description,
      Price: Price,
      Quantity: Quantity,
      Supplier_Name: Supplier_Name,
      Admin_email: Admin_email
    };

    const url = `http://localhost:5000/product/update/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((request) => request.json())
      .then((data) => {
        navigate("/manageInventory");
      });
  };

  return (
    <div style={{minHeight:"100vh"}}>
      <Container>
        <h2 className="text-center text-success fw-bold mt-3">
          Update Product{" "}
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mt-3">
            <Form.Label>Admin Email</Form.Label>
            <Form.Control
              type="email"
              value={details.Admin_email}
              readOnly
              disabled
              name="Admin_email"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={details.Product_Name}
              name="Product_Name"
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Product Image URL</Form.Label>
            <Form.Control
              type="text"
              value={details.Product_Image_URL}
              name="Product_Image_URL"
              onChange={handleImgURLChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              type="text"
              value={details.Short_Description}
              name="Short_Description"
              onChange={handleDescriptionChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              value={details.Price}
              name="Price"
              onChange={handlePriceChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              type="number"
              value={details.Quantity}
              name="Quantity"
              onChange={handleQuantityChange}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control
              type="text"
              value={details.Supplier_Name}
              name="Supplier_Name"
              onChange={handleSupplierChange}
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
