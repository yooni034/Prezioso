import React, { useState } from "react";
import axios from "axios";
import "./Join.css";

function Join() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/signup", {
        name,
        gender,
        birthYear,
        birthMonth,
        birthDay,
        phone,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleBirthYearChange = (event) => {
    setBirthYear(event.target.value);
  };

  const handleBirthMonthChange = (event) => {
    setBirthMonth(event.target.value);
  };

  const handleBirthDayChange = (event) => {
    setBirthDay(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const years = Array.from({ length: 100 }, (_, i) => 2023 - i); // 1923년 ~ 2023년
  const months = Array.from({ length: 12 }, (_, i) => i + 1); // 1월 ~ 12월
  const days = Array.from({ length: 31 }, (_, i) => i + 1); // 1일 ~ 31일

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        성별
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={handleGenderChange}
        />
        남성
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={handleGenderChange}
        />
        여성
      </label>
      <br />
      <label>
        생년
        <select value={birthYear} onChange={handleBirthYearChange}>
          <option value="">Select</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
      <label>
        월
        <select value={birthMonth} onChange={handleBirthMonthChange}>
          <option value="">Select</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </label>
      <label>
        일
        <select value={birthDay} onChange={handleBirthDayChange}>
          <option value="">Select</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Phone:
        <input type="text" value={phone} onChange={handlePhoneChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Join;
