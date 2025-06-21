import React from "react";
import "./ContactUs.css";
import contact from '../images/contact.jpg';
const Contact = () => {
  return (
    <>
      <div className="container ">

        <h1 className="text-center mb-5 mt-5">Contact Us</h1>

        {/* form */}
        <section className="contact-section py-5">
          <div className="container">

            <p className="text-center mb-5">We'd love to hear from you. Fill out the form and our team will get in touch with you shortly.</p>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label for="firstName" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstName" required />
                    </div>
                    <div className="col-md-6">
                      <label for="lastName" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastName" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label for="company" className="form-label">Company</label>
                    <input type="text" className="form-control" id="company" />
                  </div>
                  <div className="mb-3">
                    <label for="message" className="form-label">Your Message</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
