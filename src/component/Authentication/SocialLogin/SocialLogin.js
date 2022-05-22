import React from "react";
import google from "../../../SocialIcon/google.png";
import facebook from "../../../SocialIcon/facebook.png";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Spiner from "../../Common/Spiner/Spiner";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, loading1, error1] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  let errorElement;

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading || loading1) {
    return <Spiner></Spiner>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        {error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <div className="bg-secondary w-50 m-2" style={{ height: "3px" }}></div>
        <div className="fs-2">Or</div>
        <div className="bg-secondary w-50 m-2" style={{ height: "3px" }}></div>
      </div>
      {errorElement}
      <div className="py-2">
        <div className="py-2 d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-outline-secondary w-75"
            onClick={() => signInWithGoogle()}
          >
            <img src={google} alt="" className="mx-2" />
            <span>Continue with google</span>
          </button>
        </div>
        <div className="py-2 d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-outline-secondary w-75"
            onClick={() => signInWithFacebook()}
          >
            <img src={facebook} alt="" className="mx-2" />
            <span>Continue with Facebook</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
