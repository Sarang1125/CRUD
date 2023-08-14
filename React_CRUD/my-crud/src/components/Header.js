import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ color: "#fff" }}>
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home" style={{ color: "#fff" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/ListEmp" style={{ color: "#fff" }}>
                List
              </Nav.Link>
              <Nav.Link href="/PostEmp" style={{ color: "#fff" }}>
                Post
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Header;
