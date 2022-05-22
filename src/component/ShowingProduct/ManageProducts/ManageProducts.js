import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const ManageProducts = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleUpdate = (_id) => {
    user
      ? navigate(`/product/update/${_id}`)
      : navigate(`/login`);
  };

  const handleDelete = (id) => {
    if (user) {
      const proceed = window.confirm("are you sure to delete this product?");
      if (proceed) {
        const url = `http://localhost:5000/product/${id}`;
          fetch(url, {
            method: "DELETE",
          })
          .then((request) => request.json())
          .then((data) => {
            toast("Product Deleted Successfully");
            if (data.deletedCount > 0) {
              const remaining = products.filter((pd) => pd._id !== id);
              setProducts(remaining);
            }
          });
      }
    }else{
      navigate(`/login`);
    }
  };
  let count = 1;
  return (
    <div
      className="container table-responsive-sm table-responsive-md"
      style={{ minHeight: "100vh" }}
    >
      <ToastContainer />
      <div className="my-4">
        <Button
          variant="outline-primary"
          onClick={() => {
            navigate("/addProduct");
          }}
        >
          Add Product
        </Button>
      </div>
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
            <th scope="col">Method</th>
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
                  <td>
                    <Button
                      variant="success"
                      className="mb-3"
                      onClick={() => handleUpdate(product._id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
