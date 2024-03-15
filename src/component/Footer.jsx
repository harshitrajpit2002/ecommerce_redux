import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Company Name</h5>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
          </div>
          <div className="col-md-6">
            <h5>Connect With Us</h5>
            <p>Address: 123 Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
