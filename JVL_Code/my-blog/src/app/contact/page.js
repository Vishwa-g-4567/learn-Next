"use client";
import { useState } from "react";

export default function page() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState(null);
  const handleInput = (e) => {
    setInputs((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiry`, {
      method: "POST",
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setInputs({});
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
  };
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <label htmlFor="name" className="w-1/4">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded px-2 py-1 w-3/4 text-black"
            onChange={handleInput}
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="email" className="w-1/4">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded px-2 py-1 w-3/4 text-black"
            onChange={handleInput}
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="message" className="w-1/4">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="border rounded px-2 py-1 w-3/4 text-black"
            rows="4"
            onChange={handleInput}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-5">{message}</p>}
    </>
  );
}
