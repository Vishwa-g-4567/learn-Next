import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Link href={"/users"} className="text-blue-500">
        Go To Users
      </Link>
    </div>
  );
}
