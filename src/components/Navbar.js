import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import logo from "../assets/sawiya-logo.png";
import avatar from "../assets/avatar.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    setUser(null);
    navigate("/signin");
  };

  return (
    <nav
      className="navbar navbar-expand-lg px-4"
      style={{
        backgroundColor: "#008B8B", // your dark blue theme
        color: "#ffffff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Sawiya"
            style={{ height: "45px", marginRight: "10px" }}
          />
          <span
            style={{
              color: "#ffffff",
              fontWeight: "600",
              fontSize: "1.2rem",
            }}
          >
            Sawiya.lk
          </span>
        </div>

        {/* Right section */}
        <div className="d-flex align-items-center gap-3">
          {/* User profile or SignIn/SignUp */}
          {user && user.userId ? (
            <>
              {/* Notification Bell */}
              <i className="bi bi-bell-fill fs-5" style={{ color: "#FFD700" }} ></i>

              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-avatar"
                  className="p-0 border-0"
                >
                  <img
                    src={avatar}
                    alt="Profile"
                    className="rounded-circle border border-light"
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#" >My Profile</Dropdown.Item>
                  <Dropdown.Item href="/signin" onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="btn btn-outline-light btn-sm"
                style={{ fontWeight: "500" }}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="btn btn-light btn-sm"
                style={{
                  color: "#1A2238",
                  fontWeight: "500",
                }}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
