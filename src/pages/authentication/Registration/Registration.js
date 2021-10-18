import React from "react";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="auth-container">
      <div>
        <div className="register-form  ">
          <h2 className="text-dark text-center fw-bold">Register Now</h2>
          <div className="flex-container">
            <input type="email" placeholder="Email" />
          </div>

          <div className="flex-container">
            <input type="password" placeholder="Password" />
          </div>
          <button className="button-style">Submit</button>
        </div>
        <h6 className="text-center text-success mt-3">
          or use google to authenticate
          <div className="mt-3   ">
            <i class="fab fa-google-plus-square fa-3x text-danger "></i>
          </div>
        </h6>
      </div>
    </div>
  );
};

export default Registration;
