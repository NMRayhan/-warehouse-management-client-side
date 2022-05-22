import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../Common/CustomLink/CustomLink";
import "../Header/Header.css";
import { useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth).then(() => {
      console.log("Sign-out successful");
    }).catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <div className="sticky-top">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="custom-nav-item">
                <CustomLink to="/">Home</CustomLink>
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
                <CustomLink to={`/myAdded/${user?.email}`}>My added Product</CustomLink>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {user ? (
                <>
                  <Nav.Link href="#">{user?.displayName}</Nav.Link>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Sign In
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
