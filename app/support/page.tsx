"use client";

import Image from "next/image";
import React, { useState } from "react";
import "./styles.scss";

export default function App() {
  const [showText, setShowText] = useState(false);
  const handleButtonClick = () => {
    setShowText(!showText);
  };
  const A = 20;
  const B = 20 * 7;
  return (
    <div className="container">
      <div className="text-container">
        <p>Hello and welcome to my React app!</p>
        <p>Thanks for checking it out!</p>
      </div>
      <div className="progress-container">
        <p>
          Progress: {A}/{B}
        </p>
        <progress value={A} max={B}></progress>
      </div>
      <div className="image-container">
        <Image src="wechat.jpeg" alt="123" className="image" />
      </div>
      <div className="hidden-text-container">
        {showText && <p>当前密码: dong1</p>}
        <button onClick={handleButtonClick}>查看访问密码</button>
      </div>
    </div>
  );
}
