import React from "react";

export default function Shop({ params }) {
  return (
    <div>
      {params.slug.map((param, index) => (
        <h1 key={index} className="inline-block">{`${param}/`}</h1>
      ))}
    </div>
  );
}
