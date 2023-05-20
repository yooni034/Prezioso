import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8585/user/login", {
        username,
        password,
      })
      .then((response) => {
        // 로그인 성공 시 처리
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        setErrorMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
        console.error(error);
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="contentlogin">
      <h1>
        <strong>로그인</strong>
      </h1>
      <p className="prezioso">나눔의 가치, PREZIOSO 반갑습니다.</p>
      <form onSubmit={handleSubmit}>
        <label className="labellog">
          <h5 className="username">아이디</h5>
          <br />
          <input
            type="text"
            className="loginid"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <label className="labellog">
          <h5 className="password">비밀번호</h5>
          <br />
          <input
            type="password"
            className="loginpass"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-container">
          <button className="buttonlogin" type="submit">
            <strong>로그인</strong>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
