/* "use client";
import React, { useEffect, useState } from "react";

export default function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => setData(res));
    }
    fetchData();
  }, []);
  return (
    <ul className=" grid grid-cols-4">
      {data?.map((data) => (
        <ul key={data.id} className="border border-black m-2.5 p-2.5 rounded">
          <li>Name: {data.name}</li>
          <li>Username: {data.username}</li>
          <li>Email: {data.email}</li>
          <li>website: {data.website}</li>
        </ul>
      ))}
    </ul>
  );
}
 */

import React from "react";

const fetchData = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  data = await data.json();
  return data;
};

export default async function Data() {
  let data = await fetchData();
  return (
    <ul className=" grid grid-cols-4 gap-2.5 m-2.5">
      {data?.map((data) => (
        <ul key={data.id} className="border border-black p-2.5 rounded">
          <li>Name: {data.name}</li>
          <li>Username: {data.username}</li>
          <li>Email: {data.email}</li>
          <li>website: {data.website}</li>
        </ul>
      ))}
    </ul>
  );
}
