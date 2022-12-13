import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/searchBox.css";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");

  const history = useNavigate();
  // const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history(`/?keyword=${keyword}&page=1`);
    } else {
      history(history.location.pathname);
    }
  };
  return (
    <Form onSubmit={submitHandler} className=" d-inline-flex ">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5 py-0 rounded my-0 mx-2 search srch"
        placeholder="search"
      ></Form.Control>
      <Button type="submit" className="srchbtn">
        <i className="fi fi-rr-search"></i>
      </Button>
    </Form>
  );
};

export default SearchBox;
