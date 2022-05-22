import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { _id, Product_Name, Product_Image_URL, Price, Quantity } =
    props.details;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-4 Product">
      <Link to={`/details/${_id}`}>
        <div className="product-container">
          <div className="product-img">
            <img src={Product_Image_URL} alt="" />
          </div>
          <div className="product-details">
            <h4>{Product_Name}</h4>
            <hr />
            <div className="row">
              <div className="col-6">
                <h4 className="fw-bold text-center">
                  $ <span className="fw-light text-danger">{Price}</span>
                </h4>
              </div>
              <div className="col-6">
                <h4 className="fw-bold text-center">
                  in stock <span className="fw-light text-danger">{Quantity}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
