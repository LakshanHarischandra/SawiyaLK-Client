import React from "react";
import logo from "../assets/sawiya-logo.png";

const RegisterSuccessPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F5F6FA",
        flexDirection: "column",
      }}
    >
      <img src={logo} alt="Sawiya" style={{ height: "100px" }} />
      <h2 className="mt-4" style={{ color: "#1A2238", fontWeight: "700" }}>
        Thank you for registering with Sawiya.lk
      </h2>
      <p className="mt-3" style={{ maxWidth: "600px", color: "#333" }}>
        We have sent an email for your email verification. <br />
        Please check your inbox and click on the link in order to sign in to
        the application.
      </p>
    </div>
  );
};

export default RegisterSuccessPage;
