import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);
  return (
      <div className="container mb-4">
            <div className="row justify-content-md-center">
                {
                products.map(product => <Product key={product._id} details={product}></Product>)
                }
            </div>
      </div>
  );
};

export default Products;
