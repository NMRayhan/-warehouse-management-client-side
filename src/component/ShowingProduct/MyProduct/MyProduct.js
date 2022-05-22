import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const MyProduct = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const { email } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/myAdded/${email}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, [email]);
  return (
    <div style={{ minHeight: "100vh" }}>
      {user?.emailVerified ? (
        <h4 className="text-center mt-2">Admin Email: <span className="text-success">{email}</span></h4>
      ) : (
        <h4 className="text-center text-danger fw-bold">Please Verify your Email to See Product Details</h4>
      )}
    </div>
  );
};

export default MyProduct;
