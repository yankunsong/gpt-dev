"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function App() {
  const [showText, setShowText] = useState(false);
  const handleButtonClick = () => {
    setShowText(!showText);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <p>Hello and welcome to my React app!</p>
        <p>Thanks for checking it out!</p>
        {showText && <p>Here is some hidden text that is now revealed!</p>}
        <button onClick={handleButtonClick}>Show hidden text</button>
      </div>
      <div>
        <Image src="wechat.jpeg" alt="123" />
      </div>
    </div>
  );
}