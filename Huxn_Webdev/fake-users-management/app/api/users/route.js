import { NextResponse } from "next/server";
import fs from "fs";

const { users } = require("@/app/utils/db");

export async function GET() {
  try {
    const data = users;
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(req, { params }) {
  try {
    let { username, email, password } = await req.json();
    if (!username || !email || !password) {
      return NextResponse.json({ result: "Required field not found" });
    }
    const id = users.length + 1;
    users.push({ id, username, email, password });
    const updatedUserArray = users;
    const updatedData = JSON.stringify(updatedUserArray, null, 2);
    fs.writeFileSync(
      "./app/utils/db.js",
      `export const users = ${updatedData}`,
      "utf-8"
    );
    return NextResponse.json({ success: "User successfully created!" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function PUT(req, { params }) {
  try {
    let { id, username, email, password } = await req.json();
    const userIndex = users.findIndex((user) => user.id == id);
    if (userIndex == -1) {
      return NextResponse.json({ result: "User Not Found" });
    }
    if (username) {
      users[userIndex].username = username;
    }
    if (email) {
      users[userIndex].email = email;
    }
    if (password) {
      users[userIndex].password = password;
    }
    const updatedUserArray = users;
    const updatedData = JSON.stringify(updatedUserArray, null, 2);
    fs.writeFileSync(
      "./app/utils/db.js",
      `export const users = ${updatedData}`,
      "utf-8"
    );
    return NextResponse.json({ success: "User successfully updated!" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
