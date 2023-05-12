// App 컴포넌트
import "./App.css";
import React from "react";
import Main from "./components/Main";
import Serve from "./components/Serve";
import Donate from "./components/Donate";
import Mypage from "./components/Mypage";
import Login from "./components/Login";
import Join from "./components/Join";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navb">
          <span className="left">
            <Link to="/" className="logo">
              PREZIOSO
            </Link>
            <Link to="/serve" className="navbarMenu">
              봉사
            </Link>
            <Link to="/donate" className="navbarMenu">
              기부
            </Link>
            <Link to="/mypage" className="navbarMenu">
              마이페이지
            </Link>
          </span>
          <Link to="/login" className="log">
            로그인
          </Link>
          <Link to="/join" className="jo">
            회원가입
          </Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/serve" element={<Serve />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/mypage" element={<Mypage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/join" element={<Join />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
