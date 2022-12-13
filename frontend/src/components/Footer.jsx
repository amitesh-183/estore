import React from "react";
// import "./footer.css"
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      {/* Footer */}
      {/* Section: Social media */}

      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        ©2022 Copyright{" "}
        <Link className="text-reset fw-bold text-decoration-none" to="/">
          E-Store
        </Link>
        <p>
          Developed By <a href="https://github.com/amitesh-183">Amitesh</a>
        </p>
      </div>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
