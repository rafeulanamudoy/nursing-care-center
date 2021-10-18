import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/Logo/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      className="nav-container  "
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="dark"
    >
      <Container>
        <Navbar.Brand>
          <img className="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link
              className="fw-bold  nav-link fs-5    "
              as={HashLink}
              to="/home#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="fw-bold fs-5  "
              as={HashLink}
              to="/home#services"
            >
              Services
            </Nav.Link>
            <Nav.Link className="fw-bold fs-5 " as={HashLink} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link className="fw-bold fs-5  " as={HashLink} to="/jointeam">
              JoinTeam
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="fw-bold fs-5 " as={Link} to="/register">
              Register
            </Nav.Link>
            <Nav.Link className="fw-bold fs-5  " as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
