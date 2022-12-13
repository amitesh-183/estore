import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer.jsx";
import CheckoutSteps from "../components/CheckoutSteps.jsx";
import { savePaymentMethod } from "../actions/cartActions";
import "../styles/pay.css";

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();
  const history = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");

  if (!shippingAddress.address) {
    history("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />

      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="RazorPay"
              id="razorpay"
              value="razorpay"
              name="paymentMethod"
              onClick={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="Cash On Delivery"
              id="COD"
              value="cash on delivery"
              name="paymentMethod"
              defaultChecked
              onClick={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary" className="btn-prd">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
