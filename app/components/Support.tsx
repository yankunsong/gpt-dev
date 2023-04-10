import Image from "next/image";
import React from "react";

const Support: React.FC = () => {
  return (
    <div>
      <h1>Support</h1>
      <p>
        We are here to help! If you have any questions or issues, please reach
        out to us at support@example.com.
      </p>
      <Image src="../../public/favicon-32x32.png" alt="Example Image" />
    </div>
  );
};

export default Support;
