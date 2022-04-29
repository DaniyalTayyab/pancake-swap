import React from "react";
import { Nav } from "react-bootstrap";
import "../App.css";

const TabMenu = () => {
  return (
    <Nav className="container tab">
      <Nav.Item>
        <Nav.Link href="/home">Farm</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Pools</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default TabMenu;
