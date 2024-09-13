"use client";
import { users } from "@/app/utils/db";
import { Card, List, ListItem } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState("");
  useEffect(() => {
    const fetchAllUsers = async () => {
      await fetch("/api/users")
        .then((res) => res.json())
        .then((res) => setAllUsers(res.data));
    };
    fetchAllUsers();
  }, [users]);
  return (
    <div>
      {allUsers &&
        allUsers.map((user) => (
          <Card key={user.id} className="mb-4">
            <List>
              <ListItem>Username: {user.username}</ListItem>
              <ListItem>Email: {user.email}</ListItem>
              <ListItem>Password: {user.password}</ListItem>
            </List>
          </Card>
        ))}
    </div>
  );
};

export default AllUsers;
