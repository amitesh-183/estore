import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import { PayPalButton } from "react-paypal-button-v2";
// import Razorpay from "razorpay";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Message from "../components/Message.jsx";
import Loader from "../components/Loader.jsx";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../actions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";
// import axios from "axios";

const OrderScreen = () => {
  const params = useParams();
  const orderId = params.id;
  const history = useNavigate();

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading && !error) {
    order.itemsPrice = order.orderItems
      .reduce(
        (acc, item) =>
          acc + Math.round(item.price - item.price * 0.2) * item.qty,
        0
      )
      .toFixed(0);
  }

  // var options = {
  //   key: "rzp_test_wwCckz0JFT6TpB", // Enter the Key ID generated from the Dashboard
  //   amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //   currency: "INR",
  //   name: "E-Store Corp",
  //   description: "Test Transaction",
  //   image: "https://i.postimg.cc/pr36xPVZ/logo.png",
  //   order_id: "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //   handler: function (response) {
  //     alert(response.razorpay_payment_id);
  //     alert(response.razorpay_order_id);
  //     alert(response.razorpay_signature);
  //   },
  //   prefill: {
  //     name: "User's name",
  //     email: "User's email",
  //     contact: "phone number",
  //   },
  //   notes: {
  //     address: "Estore Corporate Office",
  //   },
  //   theme: {
  //     color: "#3399cc",
  //   },
  // };
  // var rzp1 = new Razorpay(options);
  // rzp1.on("payment.failed", function (response) {
  //   alert(response.error.code);
  //   alert(response.error.description);
  //   alert(response.error.source);
  //   alert(response.error.step);
  //   alert(response.error.reason);
  //   alert(response.error.metadata.order_id);
  //   alert(response.error.metadata.payment_id);
  // });
  // document.getElementById("rzp-button1").onclick = function (e) {
  //   rzp1.open();
  //   e.preventDefault();
  // };

  // //AVaG4HW0PVlZLi87TO7XJGJowkzMp38bbBfdBqJPrOpDPYaC1nwpApCktumqPmrmH98YCvoGyBJp8Bnb;

  // const addPayPalScript = () => {
  //   const script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   script.async = true;
  //   script.onload = () => {
  //     setSdkReady(true);
  //   };
  //   document.body.appendChild(script);
  // };

  useEffect(() => {
    if (!userInfo) {
      history("/login");
    }

    if (
      !order ||
      successPay ||
      order._id !== Number(orderId) ||
      successDeliver
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });

      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        // addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [order, dispatch, orderId, successPay, successDeliver, history, userInfo]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <h1>Order: {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}{" "}
              </p>
              <p>
                <strong>Email: </strong>{" "}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>{" "}
              </p>
              <p>
                <strong>Shipping: </strong>
                {order.shippingAddress.address},{order.shippingAddress.city}{" "}
                {order.shippingAddress.postalCode}{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="warning">Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method:</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">
                  Paid on {order.paidAt.substring(0, 10)}
                </Message>
              ) : (
                <Message variant="warning">Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message variant="info">Your Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link
                            className="text-decoration-none"
                            to={`/product/${item.product}`}
                          >
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₹
                          {Math.round(item.price - item.price * 0.2)} = ₹
                          {(item.qty * item.price - item.price * 0.2).toFixed(
                            0
                          )}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items:</Col>
                  <Col>₹{order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping:</Col>
                  <Col>₹{order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax:</Col>
                  <Col>₹{order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>₹{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <Button
                      amount={order.totalPrice}
                      id="rzp-button1"
                      onSuccess={successPaymentHandler}
                    >
                      Pay
                    </Button>
                  )}
                </ListGroup.Item>
              )}
            </ListGroup>

            {loadingDeliver && <Loader />}
            {userInfo &&
              userInfo.isAdmin &&
              order.isPaid &&
              !order.isDelivered && (
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn btn-block w-75 ps-5 pe-5 m-5 text-white"
                    onClick={deliverHandler}
                  >
                    Mark As Deliver
                  </Button>
                </ListGroup.Item>
              )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderScreen;
