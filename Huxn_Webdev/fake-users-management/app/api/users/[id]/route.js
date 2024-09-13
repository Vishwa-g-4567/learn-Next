import { NextResponse } from "next/server";
import fs from "fs";

const { users } = require("@/app/utils/db");

export async function GET(_, { params }) {
  try {
    const { id } = await params;
    const user = users.filter((data) => data.id == id);
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(req, { params }) {
  try {
    let { uname, uemail, upassword } = await req.json();
    const { id } = await params;
    const { username, email, password } = users.find((data) => data.id == id);
    if (username == uname && email == uemail && password == upassword) {
      return NextResponse.json({ result: "Successfully Logged In" });
    } else if (!uname || !uemail || !upassword) {
      return NextResponse.json({ result: "Please fill all the input fields" });
    } else {
      return NextResponse.json({ result: "Invalid Credentials" });
    }
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const userIndex = users.findIndex((user) => user.id == id);
    if (userIndex == -1) {
      return NextResponse.json({ result: "User Not Found" });
    }
    users.splice(userIndex, 1);
    const updatedUserArray = users;
    const updatedData = JSON.stringify(updatedUserArray, null, 2);
    fs.writeFileSync(
      "./app/utils/db.js",
      `export const users = ${updatedData}`,
      "utf-8"
    );
    return NextResponse.json({ success: "User successfully deleted!" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
