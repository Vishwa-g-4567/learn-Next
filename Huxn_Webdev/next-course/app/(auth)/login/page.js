"use client";
import React, { useState } from "react";

export default function Login() {
  const [userInfo, setUserInfo] = useState({});
  const handleInput = (e) => {
    setUserInfo((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify(userInfo),
    });
    response = await response.json();
    if (response.ok) {
      alert("User Successfully Created!");
    } else {
      alert("An Error occur while creating the new user");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputName">Name:</label>
          <input
            type="text"
            name="name"
            id="inputName"
            placeholder="Enter your name"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="inputEmail">Email:</label>
          <input
            type="email"
            name="email"
            id="inputEmail"
            placeholder="Enter your email"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="inputPass">Password:</label>
          <input
            type="password"
            name="password"
            id="inputPass"
            placeholder="Enter your password"
            onChange={handleInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
