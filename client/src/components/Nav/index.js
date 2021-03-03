import React from "react";
import Nav from 'react-bootstrap/Nav'


function Navbar() {
  return (
    <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <a href="/search">Home</a>
  </Nav.Item>
  
  <Nav.Item>
    <a href="/search">Search</a>
  </Nav.Item>
  
  <Nav.Item>
    <a href="/saved">Saved</a>
  </Nav.Item>
  <Nav.Item>
    
  </Nav.Item>
</Nav>
  );
}

export default Navbar;