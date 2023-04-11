import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Headerimg from "./img/Header.jpg";
import "./NavigationBar.css";
import { useState, useEffect } from "react";

function CustomNavbar() {
  const [headerClass, setHeaderClass] = useState("deactive");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setHeaderClass("active");
      } else {
        setHeaderClass("deactive");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header id="header" className={headerClass}>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">PREZIOSO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">로그인</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  회원가입
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <p>
          <img src={Headerimg} className="Headerimg" alt="HeaderImg" />
        </p>
      </main>
    </div>
  );
}

export default CustomNavbar;
