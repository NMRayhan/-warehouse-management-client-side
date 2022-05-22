import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const userNameRef = useRef("");
  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const userName = userNameRef.current.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUser(userName);
        verifyingEmail();
        console.log(user);
      })
      .catch((error) => {
        toast(error.message);
      });
    event.reset();
  };

  const updateUser = (userName) => {
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then(() => {
        console.log("User Profile update successfully");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const verifyingEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      toast("Please Check your Email for User verification");
    });
  };

  const navigateToLogin = () => {
    navigate(`/login`);
  };

  return (
    <div style={{ minHeight: "100vh" }} className="mx-auto w-25">
      <ToastContainer />
      <Form className="py-4" onSubmit={handleSubmitForm}>
        <h1 className="text-center fs-1 text-secondary">
          New User Registration
        </h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            ref={userNameRef}
            type="text"
            placeholder="Enter User name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="secondary"
          type="submit"
          className="w-50 d-block mx-auto"
        >
          Sign up
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <Link
          className="text-danger text-decoration-none"
          to="/login"
          onClick={navigateToLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin/>
    </div>
  );
};

export default SignUp;
