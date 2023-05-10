import "./App.css";
import React from "react";
import Headerimg from "./components/img/Header.jpg";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Serve from "./components/Serve";
import Donate from "./components/Donate";
import Mypage from "./components/Mypage";
import Login from "./components/Login";
import Join from "./components/Join";
import Mainsecond from "./components/Mainsecond";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/serve" element={<Serve />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <img src={Headerimg} className="Headerimg" alt="HeaderImg" />
        <Main />
        <Mainsecond />
      </div>
    </BrowserRouter>
  );
}

export default App;
