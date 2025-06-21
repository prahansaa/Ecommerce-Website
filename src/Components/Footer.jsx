import React from 'react'
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="text-white pt-4 pb-2" style={{ backgroundColor: "#D3455B" }}>
        <div className="container text-center text-md-start">
          <div className="row">

            <div className="col-md-4 mb-3">
              <h5 className="text-uppercase">About Us</h5>
              <br />
              <p>
                We provide quality services at potentially low pricing. Contact us to know more.
              </p>
            </div>


            <div className="col-md-2 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <br />
              <ul className="list-unstyled">
                <li className="nav-item ">
                  <NavLink to="/" className="nav-link text-white text-decoration-none">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link text-white text-decoration-none">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category" className="nav-link text-white text-decoration-none">
                    Category
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link text-white text-decoration-none">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>


            <div className="col-md-3 mb-3">
              <h5 className="text-uppercase">Contact</h5>
              <br />
              <p>Email: Prashansa.kabra18@gmail.com</p>
              <p>Phone: +91 9669455183</p>
            </div>


            <div className="col-md-3 mb-3 text-center text-md-start">
              <h5 className="text-uppercase">Follow Us</h5>

              <NavLink to="#" className="nav-link icon">
                <FaFacebook />
              </NavLink>
              <NavLink to="#" className="nav-link icon">
                <GrInstagram />
              </NavLink>
              <NavLink to="#" className="nav-link icon">
                <FaTwitter />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="text-center mt-3 border-top pt-3">
          <p className="mb-0">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>

    </>
  )
}

export default Footer