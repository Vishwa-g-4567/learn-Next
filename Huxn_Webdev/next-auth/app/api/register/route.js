import connectDB from "@/config/db";
import User from "@/model/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, email, password, confirmPassword } = await req.json();
  if (password !== confirmPassword) {
    return NextResponse.json(
      { Error: "Password Doesn't match" },
      { status: 400 }
    );
  }
  await connectDB();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ Error: "User already exits" }, { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    return NextResponse.json({ result: "User successfully register" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
