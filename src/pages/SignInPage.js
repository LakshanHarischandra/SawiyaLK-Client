import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';


function SignUpPage() {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nic, setNic] = useState('');
  const [gender, setGender] = useState('');
  const [addressLineOne, setAddressLineOne] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    toast.error('Invalid email format');
    return;
  }

  try {
     const response = await axios.post("http://localhost:8086/signin/user", { email, password });
      const resData = response.data;
      if (resData?.successOrFail === "Success") {
        toast.success(resData.message);
        // Save user data in sessionStorage
        sessionStorage.setItem("userData", JSON.stringify(resData.data.userDto));
        // Redirect to home
        setTimeout(() => {
          navigate("/");
        }, 2200);
      } else {
        toast.error(resData.message);
      }
  } catch (err) {
    console.error(err);
    toast.error('Something went wrong! Please try again.');
  }
};

  return (
    <div className="container mt-5" >
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="text-center mb-4">Sawiya.lk</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn w-100"
                style={{
                  backgroundColor:"#008B8B",
                  color:"#ffffff",
                  fontWeight: "500",
                }}>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;