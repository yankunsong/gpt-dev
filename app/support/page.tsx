import Image from "next/image";
import React, { useState } from "react";

export default function App() {
  const [showText, setShowText] = useState(false);
  const handleButtonClick = () => {
    setShowText(true);
  };
  return (
    <>
      <div>
        <p>Hello and welcome to my React app!</p>
        <p>网站运行至今，</p>
        <p>
          Here is another paragraph to demonstrate how multiple paragraphs can
          be included in the same component.
        </p>
        <p>Thanks for checking it out!</p>
        {showText && <p>Here is some hidden text that is now revealed!</p>}
        <button onClick={handleButtonClick}>Show hidden text</button>
      </div>
      <div>
        <Image src="wechat.jpeg" alt="123" />
      </div>
    </>
  );
}
