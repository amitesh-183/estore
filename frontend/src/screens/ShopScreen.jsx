import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Product from "../components/Product.jsx";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions";
import "../styles/homeScreen.css";

const ShopScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  const location = useLocation();

  let keyword = location.search;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((products) => (
              <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                <div className="prd">
                  <div
                    data-aos="fade-up"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                  >
                    <Product product={products} />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
};

export default ShopScreen;
