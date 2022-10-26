import React from "react";
import { Navbar, Nav } from "rsuite";

export function MyNav() {
  return <Navbar>
    <Navbar.Brand href="#">InnPastry MokanShop</Navbar.Brand>
    <Nav>
      <Nav.Item eventKey="1">New Products</Nav.Item>
      <Nav.Item eventKey="2">Popular Products</Nav.Item>
      <Nav.Item eventKey="3">About Us</Nav.Item>
      <Nav.Item eventKey="4">Contacts</Nav.Item>
    </Nav>
  </Navbar>;
}
