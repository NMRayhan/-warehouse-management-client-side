import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  console.log(user);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleResetEmail = async () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Please Check Your Email for Password Reset Link");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const navigateToRegister = () => {
    navigate(`/register`);
  };
  return (
    <div style={{ minHeight: "100vh" }} className="mx-auto w-25">
      <ToastContainer />
      <Form className="py-4" onSubmit={handleSubmitForm}>
        <h1 className="text-center fs-1 text-secondary">User Login</h1>
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
          Login
        </Button>
      </Form>
      <p>
        New to Genius Car?{" "}
        <Link
          className="text-danger text-decoration-none"
          to="/register"
          onClick={navigateToRegister}
        >
          Please Register
        </Link>{" "}
      </p>
      <p className="mt-2">
        Forget password?{" "}
        <button className="btn btn-link" onClick={handleResetEmail}>
          Reset password
        </button>{" "}
      </p>
      <SocialLogin />
    </div>
  );
};

export default SignIn;
