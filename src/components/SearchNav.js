import React from "react";
//import { Button } from "react-bootstrap";
import { FormControl, Container, Navbar, Form, Nav } from "react-bootstrap";
//import { useNavigate } from "react-router";

const SearchNav = ({ handleChange, searchField }) => {
  // const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ color: "orange" }}>Blog Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            // className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search a blog"
              value={searchField}
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SearchNav;
