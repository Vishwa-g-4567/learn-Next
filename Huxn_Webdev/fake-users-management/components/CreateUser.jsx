"use client";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

const CreateUser = () => {
  const [userInfo, setUserInfo] = useState({});
  const handleInput = (e) => {
    setUserInfo((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let { username, email, password } = userInfo;
    if (!username || !email || !password) {
      alert("Please fill all the input fields");
      return;
    }
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      if (response) {
        alert("User successfully created!");
      } else {
        alert("Something went wrong while creating user");
        return;
      }
    } catch (error) {
      alert(error);
      return;
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleInput}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleInput}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleInput}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CreateUser;
