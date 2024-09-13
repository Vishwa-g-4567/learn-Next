"use client";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

const UpdateUser = () => {
  const [updateUserInfo, setUpdateUserInfo] = useState({});
  const handleInput = (e) => {
    setUpdateUserInfo((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let { id, username, email, password } = updateUserInfo;
    if (!id || !username || !email || !password) {
      alert("Please fill all the input fields");
      return;
    }
    try {
      const response = await fetch("/api/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUserInfo),
      });
      if (response) {
        alert("User successfully updated!");
      } else {
        alert("Something went wrong while updating user");
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
          label="ID"
          type="number"
          name="id"
          placeholder="Enter ID"
          onChange={handleInput}
        />
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

export default UpdateUser;
