import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Product from "../components/Product.jsx";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";
import Paginate from "../components/Paginate";
import PreFooter from "../components/PreFooter";
import AOS from "aos";
import ProductCarousel from "../components/ProductCarousel";
import ServicesSlot from "../components/ServicesSlot";
import ClientReview from "../components/ClientReview";
import { listProducts } from "../actions/productActions";
import "../styles/homeScreen.css";

const HomeScreens = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  const location = useLocation();

  AOS.init();
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  let keyword = location.search;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      {!keyword && <ProductCarousel />}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          {!keyword && <h1 className="text-center mt-5">Latest Products</h1>}
          <Row>
            {products.map((products) => (
              <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                <div className="prd">
                  <div
                    data-aos="flip-left"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                  >
                    <Product product={products} />
                  </div>
                </div>
              </Col>
            ))}
            <Paginate page={page} pages={pages} keyword={keyword} />
          </Row>
          <Container>{!keyword && <ServicesSlot />}</Container>
          {!keyword && <ClientReview />}
        </div>
      )}
      {!keyword && <PreFooter />}
    </div>
  );
};

export default HomeScreens;
