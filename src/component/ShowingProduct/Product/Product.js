import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const {
    _id,
    Supplier_Name,
    Short_Description,
    Quantity,
    Product_Name,
    Product_Image_URL,
    Admin_email,
    Price,
  } = props.details;
  return (
    <div className="col-md-3 mt-4 Product">
      <Link to={`/details/${_id}`} >
        <div className="product-container">
          <div className="product-img">
            <img src={Product_Image_URL} alt="" />
          </div>
          <div className="product-details">
            <h4>{Product_Name}</h4>
            <hr />
            <h4 className="fw-bold text-center">
              $ <span className="fw-light">{Price}</span>
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
