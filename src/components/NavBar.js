import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/countries">Countries</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/counter">Counter</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
