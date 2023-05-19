import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Join.css";

function Join() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [phonePrefix, setPhonePrefix] = useState("");
  const [phoneSuffix1, setPhoneSuffix1] = useState("");
  const [phoneSuffix2, setPhoneSuffix2] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUsernameDuplicate, setIsUsernameDuplicate] = useState(false);
  const [usernameDuplicateMessage, setUsernameDuplicateMessage] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const birthdateString = `${birthdate.year}-${birthdate.month}-${birthdate.day}`;
    const phoneString = phonePrefix + phoneSuffix1 + phoneSuffix2;

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }

    axios
      .post("http://localhost:8585/user/signup", {
        name,
        username,
        password,
        confirmPassword,
        email,
        birthdate: birthdateString,
        phone: phoneString,
      })
      .then((response) => {
        setSuccessMessage("회원 가입이 완료되었습니다.");
        console.log(response.data);
        navigate("/main");
      })
      .catch((error) => {
        setErrorMessage("회원 가입에 실패하였습니다.");
        console.error(error);
      });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmedPassword = event.target.value;
    setConfirmPassword(confirmedPassword);
    setPasswordMatchError(password !== confirmedPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    const { name, value } = event.target;
    setBirthdate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhonePrefixChange = (event) => {
    setPhonePrefix(event.target.value);
  };

  const handlePhoneSuffix1Change = (event) => {
    setPhoneSuffix1(event.target.value);
  };

  const handlePhoneSuffix2Change = (event) => {
    setPhoneSuffix2(event.target.value);
  };

  const checkUsernameDuplicate = () => {
    axios
      .get(`http://localhost:8585/user/check/${username}`)
      .then((response) => {
        if (response.data.isDuplicate) {
          setIsUsernameDuplicate(true);
          setUsernameDuplicateMessage("중복된 아이디입니다.");
        } else {
          setIsUsernameDuplicate(false);
          setUsernameDuplicateMessage("사용 가능한 아이디입니다.");
        }
      })
      .catch((error) => {
        console.error(error);
        setIsUsernameDuplicate(false);
        setUsernameDuplicateMessage("아이디 중복 확인에 실패하였습니다.");
      });
  };

  useEffect(() => {
    setIsUsernameDuplicate(false);
    setUsernameDuplicateMessage("");
  }, [username]);

  useEffect(() => {
    if (successMessage) {
      alert(successMessage);
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);

  const years = Array.from({ length: 100 }, (_, i) => 2023 - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const phonePrefixOptions = ["010", "011", "016", "017", "019"];

  return (
    <div className="contentjoin">
      <h1>
        <strong>회원가입</strong>
      </h1>
      <p className="stit">작은 마음이 누군가에게는 큰 힘이 됩니다.</p>
      <h4>회원정보입력</h4>
      <form onSubmit={handleSubmit}>
        <label className="label">
          <h5 className="name">
            이름<strong className="point">*</strong>
          </h5>
          <br />
          <input
            type="text"
            className="inputname"
            value={name}
            onChange={handleNameChange}
          />
        </label>{" "}
        <label className="label">
          <h5 className="username">
            아이디<strong className="point">*</strong>
          </h5>
          <br />
          <input
            type="text"
            className="inputusername"
            value={username}
            onChange={handleUsernameChange}
          />
          <button
            type="button"
            className="check"
            onClick={checkUsernameDuplicate}
          >
            <strong>중복확인</strong>
          </button>
          {usernameDuplicateMessage && (
            <p
              className={
                isUsernameDuplicate
                  ? "duplicate-message error-message"
                  : "valid-message error-message"
              }
            >
              {usernameDuplicateMessage}
            </p>
          )}
        </label>
        <label className="label">
          <h5 className="password">
            비밀번호<strong className="point">*</strong>
          </h5>
          <br />
          <input
            type="password"
            className="inputpass"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label className="label">
          <h5 className="password">
            비밀번호 확인<strong className="point">*</strong>
          </h5>
          <br />
          <input
            type="password"
            className="inputpass"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {passwordMatchError && (
            <p className="error-message">비밀번호가 일치하지 않습니다.</p>
          )}
        </label>
        <label className="label">
          <h5 className="email">
            이메일<strong className="point">*</strong>
          </h5>
          <br />
          <input
            type="email"
            className="inputemail"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          <h5 className="birth">
            생년월일<strong className="point">*</strong>
          </h5>
          <br />
          <select
            value={birthdate.year}
            className="inputbirth"
            onChange={handleBirthdateChange}
            name="year"
          >
            <option value="">년</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            value={birthdate.month}
            className="
        inputbirth"
            onChange={handleBirthdateChange}
            name="month"
          >
            <option value="">월</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            value={birthdate.day}
            className="inputbirth"
            onChange={handleBirthdateChange}
            name="day"
          >
            <option value="">일</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>{" "}
        <label>
          <h5 className="phone">
            휴대전화<strong className="point">*</strong>
          </h5>
          <br />
          <select
            value={phonePrefix}
            className="inputphone"
            onChange={handlePhonePrefixChange}
          >
            <option value="">선택</option>
            {phonePrefixOptions.map((prefix) => (
              <option key={prefix} value={prefix}>
                {prefix}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="inputphone"
            value={phoneSuffix1}
            onChange={handlePhoneSuffix1Change}
          />
          <input
            type="text"
            className="inputphone"
            value={phoneSuffix2}
            onChange={handlePhoneSuffix2Change}
          />
        </label>
        <div className="button-container">
          <button className="buttonjoin" type="submit">
            <strong>가입하기</strong>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Join;
