import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [details, setDetails] = useState([]);
  const { _id } = useParams();

  const {
    Supplier_Name,
    Short_Description,
    Quantity,
    Product_Name,
    Product_Image_URL,
    Price,
  } = details;

  useEffect(() => {
    const url = `http://localhost:5000/product/details/${_id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });
  }, [_id, details]);


  const HandleProductDelivery = (event) =>{
    const url = `http://localhost:5000/product/quantity/update/${_id}`
    fetch(url, {
      method:"PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    })
  }


  return (
    <div className="container mt-5">
      <hr />
      <div className="row details-wrapper">
        <div className="col-md-4 col-lg-4 col-sm-12 product-img border">
          <img src={Product_Image_URL} alt="" className="" />
        </div>
        <div className="col-md-8 col-lg-8 col-sm-12 product-details-wrapper">
          <div className="row product-details">
            <div className="col-md-4 product-title">
              <h3>
                Product Title : <span className="fw-light">{Product_Name}</span>
              </h3>
            </div>
            <div className="col-md-4 description">
              <h5>
                Short description : <br />{" "}
                <span className="fw-light">{Short_Description}</span>
              </h5>
            </div>
            <div className="col-md-4 Supplier">
              <h5>
                Supplier Name : <br />{" "}
                <span className="fw-light">{Supplier_Name}</span>
              </h5>
            </div>
          </div>
          <div className="row">
            <hr />
            <div className="col-md-6">
              <h3>
                Price $: <span className="text-primary fw-bold">{Price}</span>
              </h3>
            </div>
            <div className="col-md-3">
              <h3 className="fw-light text-primary">
                Stock <span>{Quantity}</span>
              </h3>
            </div>
            <div className="col-md-3">
              <Button variant="outline-secondary">Re-Stock</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-4 mx-auto mt-4">
        <button className="btn btn-outline-primary" onClick={HandleProductDelivery} type="button">
          Delivered
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
