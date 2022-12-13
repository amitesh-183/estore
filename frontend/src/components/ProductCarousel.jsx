import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/prdCarousel.css";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { error, loading, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" fade>
      <Carousel.Item interval={5000}>
        <Link to="/product">
          <img
            className="d-block w-100 img-fluid img-responsive"
            src="https://i.postimg.cc/zvTHQmD1/Take-a-Sip-1.png"
            alt="First slide"
          />
        </Link>
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Link to="/product/17">
          <img
            className="d-block w-100 img-fluid img-responsive"
            src="https://i.postimg.cc/Jn1nPyDM/Take-a-Sip.png"
            alt="Second slide"
          />
        </Link>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/product/5">
          <img
            className="d-block w-100 img-fluid img-responsive"
            src="https://i.postimg.cc/pTf0tLB0/Take-a-Sip-2.png"
            alt="Third slide"
          />
        </Link>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    // <Carousel pause="hover" className="bg-dark">
    //   {products.map((product) => (
    //     <Carousel.Item key={product._id}>
    //       <Link to={`/product/${product._id}`}>
    //         <Image
    //           src={product.image}
    //           alt={product.name}
    //           className="caros"
    //           fluid
    //         />
    //         <Carousel.Caption className="carousel.caption capt">
    //           <h4>
    //             {product.name}(₹{product.price})
    //           </h4>
    //         </Carousel.Caption>
    //       </Link>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
  );
};

export default ProductCarousel;
