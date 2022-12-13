import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/border.css";

const PreFooter = () => {
  return (
    <div className="bd">
      <Container>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <Link to="" className="me-4 text-reset bg-primary:hover">
              <i className="fab fa-facebook-f" />
            </Link>
            <a
              href="https://twitter.com/amitesh_exe"
              className="me-4 text-reset"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://James183.pythonanywhere.com"
              className="me-4 text-reset"
            >
              <i className="fab fa-google" />
            </a>
            <Link to="" className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </Link>
            <a
              href="https://linkedin.com/in/bamitesh183"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/amitesh-183"
              className="me-4 text-reset"
            >
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
      </Container>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <img
                  src="https://i.postimg.cc/pr36xPVZ/logo.png"
                  className="logo"
                  alt="E-Store"
                />
                E-Store
              </h6>
              <p>
                E-Store is place where your wishes get's fulfilled with an ease
                of fast and easy user experience
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="/" className="text-reset">
                  Electronics
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Groceries
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Health
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Home decor
                </Link>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="#!" className="text-reset">
                  Pricing
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Settings
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Orders
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Help
                </Link>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> Chhattisgarh, Bhilai, India
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                estore@support.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3" /> + 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
    </div>
  );
};

export default PreFooter;
