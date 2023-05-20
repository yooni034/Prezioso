import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Main from "./components/Main";
import Serve from "./components/Serve";
import Donate from "./components/Donate";
import Mypage from "./components/Mypage";
import Login from "./components/Login";
import Join from "./components/Join";
import Green from "./components/Green";
import Unicef from "./components/Unicef";
import Good from "./components/Good";

function DropdownMenu() {
  return (
    <NavDropdown title="후원" id="basic-nav-dropdown">
      <NavDropdown.Item href="/donate/unicef">유니세프</NavDropdown.Item>
      <NavDropdown.Item href="/donate/green">초록우산</NavDropdown.Item>
      <NavDropdown.Item href="/donate/good">굿네이버스</NavDropdown.Item>
    </NavDropdown>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar
        bg="white"
        expand="lg"
        style={{
          width: "100%",
          padding: "0.85rem",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            PREZIOSO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/serve">
                봉사
              </Nav.Link>
              <DropdownMenu />
              <Nav.Link as={Link} to="/mypage">
                마이페이지
              </Nav.Link>
            </Nav>
            <Nav className="right-links">
              <Nav.Link as={Link} to="/login">
                로그인
              </Nav.Link>
              <Nav.Link as={Link} to="/join">
                회원가입
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/serve" element={<Serve />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/unicef" element={<Unicef />} />
        <Route path="/donate/green" element={<Green />} />
        <Route path="/donate/good" element={<Good />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
