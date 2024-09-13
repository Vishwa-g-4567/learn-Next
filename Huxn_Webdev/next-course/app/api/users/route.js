import { Users } from "@/app/utils/data";
import { NextResponse } from "next/server";

export async function GET(req) {
  const res = await Users();
  let data = res.users.map(
    (data) => data.username.charAt(0).toUpperCase() + data.username.slice(1)
  );
  return NextResponse.json({ data: data });
}

export async function POST(req, res) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ error: "required filed not found", ok: false });
  }
  return NextResponse.json({
    res: "user credential data get successfully",
    ok: true,
  });
}
