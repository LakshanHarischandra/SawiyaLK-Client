import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/sawiya-logo.png";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    nic: "",
    gender: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    postalCode: "",
    country: "",
    email: "",
    contactNumber: "",
    password: "",
    roleId: "",
  });

  // Form validation before submit
  const validate = () => {
    const {
      title,
      firstName,
      lastName,
      gender,
      addressLineOne,
      city,
      postalCode,
      country,
      email,
      contactNumber,
      password,
      roleId,
      nic,
    } = formData;

    if (
      !title ||
      !firstName ||
      !lastName ||
      !gender ||
      !addressLineOne ||
      !city ||
      !postalCode ||
      !country ||
      !email ||
      !contactNumber ||
      !password ||
      !roleId
    ) {
      toast.error("Please fill all required fields!");
      return false;
    }

    if (roleId === "3") {
      const nicPattern = /^([0-9]{9}[vVxX]|[0-9]{12})$/;
      if (!nic.match(nicPattern)) {
        toast.error("Invalid NIC format for Representative!");
        return false;
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }

    if (!/^\d+$/.test(contactNumber)) {
      toast.error("Contact number should contain digits only!");
      return false;
    }

    if (password.length < 5) {
      toast.error("Password must be at least 5 characters long!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post("http://localhost:8086/register/user", formData);

      if (response.data?.successOrFail === "Success") {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/register-success");
        }, 1000);
      } else {
        toast.error(response.data?.message);
      }
    } catch (error) {
      toast.error("An error occurred during registration!");
    }
  };

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F5F6FA",
      }}
    >
      <div
        className="card shadow-lg p-4 mx-auto"
        style={{
          width: "95%",
          maxWidth: "900px",
          borderRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <h3 className="text-center mb-4" style={{ color: "#2b6777" }}>
          Create Your Account
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Title */}
            <div className="col-md-4">
              <label className="form-label fw-bold">Title<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <div className="d-flex justify-content-between">
                {["Mr", "Miss", "Mrs", "Venerable"].map((title) => (
                  <div key={title} className="form-check">
                    <input
                      type="radio"
                      name="title"
                      value={title}
                      checked={formData.title === title}
                      onChange={handleChange}
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label">{title}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* First Name */}
            <div className="col-md-4">
              <label className="form-label fw-bold">First Name<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Last Name */}
            <div className="col-md-4">
              <label className="form-label fw-bold">Last Name<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Gender */}
            <div className="col-md-3">
              <label className="form-label fw-bold">Gender<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* NIC */}
            <div className="col-md-3">
              <label className="form-label fw-bold">NIC</label>
              <input
                type="text"
                name="nic"
                value={formData.nic}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            {/* Role */}
            <div className="col-md-3">
              <label className="form-label fw-bold">Role<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <select
                name="roleId"
                value={formData.roleId}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select</option>
                <option value="2">User</option>
                <option value="3">Representative</option>
              </select>
            </div>

            {/* Contact Number */}
            <div className="col-md-3">
              <label className="form-label fw-bold">Contact Number<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Email<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Password */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Password<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Address Line 1 */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Address Line 1<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <input
                type="text"
                name="addressLineOne"
                value={formData.addressLineOne}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Address Line 2 */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Address Line 2</label>
              <input
                type="text"
                name="addressLineTwo"
                value={formData.addressLineTwo}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            {/* City */}
            <div className="col-md-4">
              <label className="form-label fw-bold">City<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Postal Code */}
            <div className="col-md-4">
              <label className="form-label fw-bold">Postal Code<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Country */}
            <div className="col-md-4">
              <label className="form-label fw-bold">Country<span className="required" style={{color: "#dd1010ff" }}>*</span></label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Submit */}
            <div className="col-12 text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary px-5 py-2"
                style={{ backgroundColor: "#2b6777", border: "none" }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>      
    </div>
  );
};

export default SignUpPage;
