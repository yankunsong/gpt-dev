"use client";

import Image from "next/image";
import React, { useState } from "react";
import "./styles.scss";

export default function App() {
  const [showText, setShowText] = useState(false);
  const handleButtonClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <div className="container">
        <div className="text-container">
          <p>Hello and welcome to my React app!</p>
          <p>Thanks for checking it out!</p>
          {showText && <p>Here is some hidden text that is now revealed!</p>}
          <button onClick={handleButtonClick}>Show hidden text</button>
        </div>
        <div className="image-container">
          <Image src="wechat.jpeg" alt="123" className="image" />
        </div>
      </div>
    </div>
  );
}
