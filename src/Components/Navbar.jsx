import React from "react";
import "./Navbar.css";
import logo from "./../images/logo_new.png";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "./CartContext.jsx";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} height="80px" width="80px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="new">
            <NavLink to="#" className="nav-link icon">
              <FaCartPlus data-bs-toggle="offcanvas" data-bs-target="#demo" />
              <span className="cart-count"><sup>{cart.length}</sup></span>
            </NavLink>


            <NavLink to="/login" className="nav-link icon">
              <CgProfile />
            </NavLink>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn button" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Your Cart</h1>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column justify-content-between">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <h5>
              {cart.map((item, index) => (
                <strong key={index}>
                  <img src={item.image} alt="" height="80px" width="80px" className="mb-3" /> <span style={{ padding: '35px' }}> Price: <FiDollarSign />{item.price}</span> <span style={{ color: 'red', paddingLeft: 'auto', fontSize: '22px' }}><AiFillDelete /></span>
                </strong>
              ))}
            </h5>
          )}

          <button className="btn btn-dark w-100">Check Out</button>

        </div>
      </div>
    </>
  );
};

export default Navbar;
