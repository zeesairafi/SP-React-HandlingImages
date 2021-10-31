import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/products">
          <Navbar.Brand>Chicken Shop</Navbar.Brand>
        </Link>
        {/* <Nav className="me-auto">
          <Nav.Link>
            <Link to="/products">Products</Link>
          </Nav.Link>
        </Nav> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
