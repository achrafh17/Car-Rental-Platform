"use client";
import React from "react";
import { useState } from "react";

export default function About() {
  const [link, setlink] = useState(process.env.NEXT_PUBLIC_URL);
  const handlelink = () => {
    console.log("link", link);
  };
  return (
    <div>
      <h2>{link}</h2>
      <h2>hello from about</h2>
      <button onClick={handlelink}>link</button>
    </div>
  );
}
