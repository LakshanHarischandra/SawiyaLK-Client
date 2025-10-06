import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/sawiya-logo.png";

const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  useEffect(() => {
    const verify = async () => {
      if (!token || !email) {
        toast.error("Invalid verification link!");
        return;
      }

      try {
        const response = await axios.post(
          `http://localhost:8086/verify/email/token?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`
        );

        if (response.data?.successOrFail === "Success") {
          toast.success(response.data?.message);
          setTimeout(() => navigate("/signin"), 1000);
        } else if(response.data?.successOrFail === "Failed") {
          toast.error(response.data?.message);
          setTimeout(() => navigate("/signin"), 1500);
        }else{
          toast.error(response.data?.message);
        }
      } catch (err) {
        toast.error("Error verifying email!");
      }
    };

    verify();
  }, [token, email, navigate]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <img src={logo} alt="Sawiya" width={120} />
      <h4 className="mt-3">Verifying your email...</h4>
    </div>
  );
};

export default VerifyEmailPage;
