import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const MyProduct = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);

  const { email } = useParams();

  useEffect(() => {
    const url = `https://cryptic-castle-49373.herokuapp.com/myAdded/${email}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [email]);
  let count = 1;
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="container table-responsive-sm table-responsive-md"
    >
      {user?.emailVerified ? (
        <>
          <h4 className="text-center mt-2">
            Admin Email: <span className="text-success">{email}</span>
          </h4>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Admin Email</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{count++}</th>
                      <td>{product.Product_Name}</td>
                      <td>{product.Short_Description}</td>
                      <td>
                        <img
                          src={product.Product_Image_URL}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </td>
                      <td>{product.Supplier_Name}</td>
                      <td>{product.Admin_email}</td>
                      <td>{product.Quantity}</td>
                      <td>{product.Price}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h4 className="text-center text-danger fw-bold">
          Please Verify your Email to See Product Details
        </h4>
      )}
    </div>
  );
};

export default MyProduct;
