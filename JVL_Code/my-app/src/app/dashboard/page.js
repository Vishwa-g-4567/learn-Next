"use client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button
        className="bg-blue-500 rounded text-white font-bold py-2 px-4"
        onClick={() => router.push("/")}
      >
        Back
      </button>
      <h1>Dashboard Page</h1>
    </div>
  );
}
