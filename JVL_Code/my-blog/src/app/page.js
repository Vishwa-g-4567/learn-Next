"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const inputRef = useRef("");
  const [search, setSearch] = useState(false);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, []);
  const searchPost = (e) => {
    if (e.type == "keydown" && e.key != "Enter") {
      return;
    }
    setSearch(true);
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?q=${inputRef.current.value}`
    )
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .finally(() => setSearch(false));
  };
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
      <p>Here you can the latest articles.</p>
      <div className="flex justify-end">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md text-black"
          placeholder="Search..."
          ref={inputRef}
          onKeyDown={searchPost}
          disabled={search}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
          disabled={search}
          onClick={searchPost}
        >
          {search ? "Loading..." : "Search"}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
        {posts.map((post) => (
          <Link href={"/post/" + post._id}>
            <div className="border border-gray-200 p-4" key={post.id}>
              <img
                className="w-full h-48 object-contain mb-4"
                src={post.image}
                alt="Post Image"
              />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.short_description}</p>
            </div>
          </Link>
        ))}
      </div>
      {!posts.length > 0 && inputRef.current.value && (
        <p>
          No posts available for this query: <b>{inputRef.current.value}</b>
        </p>
      )}
    </>
  );
}
