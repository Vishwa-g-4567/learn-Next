"use client";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

const DeleteUser = () => {
  const [userId, setUserId] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("Please provide user ID to delete the user");
      return;
    }
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
      });
      if (response) {
        alert("User successfully deleted!");
        setUserId("");
      } else {
        alert("Something went wrong while deleting the user");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <div className="w-74">
          <Input
            label="Enter User ID"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <Button className="ml-2.5" type="submit">
          Delete User
        </Button>
      </form>
    </div>
  );
};

export default DeleteUser;
