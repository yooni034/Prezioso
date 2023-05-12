// Login 컴포넌트
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div id="login" className="login">
      <div className="container">
        <form>
          <input type="text" placeholder="아이디" required />
          <input type="password" placeholder="비밀번호" required />
          <button onClick={() => navigate("/")}>로그인</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
