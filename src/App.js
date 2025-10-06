import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Layout from "./components/Layout";
import RegisterSuccessPage from "./pages/RegisterSuccessPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import 'bootstrap/dist/css/bootstrap.min.css';


const AppContent = () => {
  const location = useLocation();

  // paths that shouldn't show Navbar or Sidebar
  const hideLayoutPaths = ["/signin", "/signup", "/register-success", "/confirm/email"];

  const shouldHideLayout = hideLayoutPaths.some((path) =>
  location.pathname.toLowerCase().startsWith(path)
);

  return shouldHideLayout ? (
    // no layout for sign-in/up
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/register-success" element={<RegisterSuccessPage />} />
      <Route path="/confirm/email" element={<VerifyEmailPage />} />      
    </Routes>
  ) : (
    // layout for all others
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />        
      </Routes>
    </Layout>
  );
};

const App = () => (
  <Router>
    <AppContent />
    {/* ✅ Toast container at global level */}
      <ToastContainer position="bottom-right" autoClose={2500} />
  </Router>
);

export default App;