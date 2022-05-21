import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../../Common/CustomLink/CustomLink";
import "../Header/Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="custom-nav-item">
                <CustomLink to="/home">Home</CustomLink>
              </Nav.Link>
              <Nav.Link className="custom-nav-item">
                <CustomLink to="/blog">Blog</CustomLink>
              </Nav.Link>
              <Nav.Link className="custom-nav-item">
                <CustomLink to="/addProduct">Add Product</CustomLink>
              </Nav.Link>
              <Nav.Link className="custom-nav-item">
                <CustomLink to="/manageInventory">Manage Inventory</CustomLink>
              </Nav.Link>
              <Nav.Link className="custom-nav-item">
                <CustomLink to="/myAdded">My added Product</CustomLink>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#">Nur Mohammad Rayhan</Nav.Link>
              <Button variant="outline-secondary">Sign Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
