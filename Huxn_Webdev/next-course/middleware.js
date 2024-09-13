import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.json({ success: "Successfully Run" });
}
export const config = {
  matcher: "/users/:path*",
};
