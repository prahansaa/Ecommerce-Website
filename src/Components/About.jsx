import React from "react";
import './About_us.css';
import log from '../images/log.jpg';

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="division">
          <h1 className="text-white">About Us</h1>
        </div>
        <div className="box">
          <img
            src={log}
            alt="About"
            className="img-fluid rounded mb-3"
            style={{ maxWidth: '100%', height: '400px' }}
          />
          <p className="text-dark">
            We believe in finding the perfect fit, both in clothing and style.
            We hand-select unique, high-quality pieces for the fashion-forward
            individual, offering a curated collection that's as diverse as you are.
            Whether you're looking for everyday essentials or statement pieces,
            we're here to help you express your personal  We believe in finding the perfect fit, both in clothing and style.
            We hand-select unique, high-quality pieces for the fashion-forward
            individual, offering a curated collection that's as diverse as you are.
            Whether you're looking for everyday essentials or statement pieces,
            we're here to help you express your personal style.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
