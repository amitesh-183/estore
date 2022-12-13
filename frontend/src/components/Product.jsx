import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating.jsx";
import "../styles/product.css"

const Products = ({ product }) => {
  let disc = Math.round(product.price * 0.2);
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body>
        <Link className="text-decoration-none" to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">₹{product.price - disc}</Card.Text>
        <Card.Text className="mrp">
          <span className="rounded-1 text-bg-danger p-1">20% off</span>{" "}
          <strike>M.R.P{Math.round(product.price)}</strike>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;
