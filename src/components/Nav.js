import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <div className="navb">
        <Link className="logo" to={"/"}>
          PREZIOSO
        </Link>
        <Link className="navbarMenu" to={"/serve"}>
          봉사
        </Link>
        <Link className="navbarMenu" to={"/donate"}>
          기부
        </Link>
        <Link className="navbarMenu" to={"/mypage"}>
          마이페이지
        </Link>
        <Link className="log" to={"/login"}>
          로그인
        </Link>
        <Link className="jo" to={"/join"}>
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default Nav;
