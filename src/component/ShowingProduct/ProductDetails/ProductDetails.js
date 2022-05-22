import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./ProductDetails.css";
import { useAuthState} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const ProductDetails = () => {
  const [details, setDetails] = useState([]);
  const { _id } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

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

  const HandleProductDelivery = (event) => {
    if (user) {
      const url = `http://localhost:5000/product/quantity/update/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Product Delivery Complete");
        });
    } else {
      navigate(`/details/${_id}`);
      toast("Please Login or Register Your self as Admin");
    }
  };

  const HandleRestock = () => {
    if (user) {
      const number = window.prompt("Enter New Quantity of Item");
      const quantity = parseInt(number);
      if (quantity > 0) {
        const url = `http://localhost:5000/product/quantity/reStock/${_id}/${quantity}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(details),
        })
          .then((res) => res.json())
          .then((data) => {
            toast("Product Re-stock Complete");
          });
      } else {
        return;
      }
    } else {
      toast("Please Login or Register Your self as Admin");
      navigate(`/details/${_id}`);
    }
  };

  return (
    <div className="container mt-5" style={{ minHeight: "100vh" }}>
      <hr />
      <ToastContainer />
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
              <Button variant="outline-secondary" onClick={HandleRestock}>
                Re-Stock
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-4 mx-auto mt-4">
        <button
          className="btn btn-outline-primary"
          onClick={HandleProductDelivery}
          type="button"
        >
          Delivered
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
