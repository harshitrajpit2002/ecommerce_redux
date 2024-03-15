import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

import {  useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/action/Index";

const Navbar = () => {
  const state =useSelector((state)=>state.HandleCart)
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const handleLogout = ()=>{
    localStorage.removeItem('logein')
    localStorage.removeItem('cartItems'); // Clear cart items from local storage
    dispatch(clearCart()); // Dispatch the clear cart action
   
    navigate('/')
  }
  const isLogin = localStorage.getItem('logein')
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-lg">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Ecommerce
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons d-flex flex-wrap justify-content-center align-items-center">
  <NavLink to="/login" className="btn btn-outline-dark mb-2">
    Login
  </NavLink>
  <NavLink to="/register" className="btn btn-outline-dark mb-2 ms-md-2">
    Register
  </NavLink>
  <NavLink to="/cart" className="btn btn-outline-dark mb-2 ms-md-2">
    Cart ({state.length})
  </NavLink>
  {
    isLogin && 
    <button onClick={handleLogout} className="btn btn-outline-dark mb-2 ms-md-2">Logout</button>
  }
</div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
