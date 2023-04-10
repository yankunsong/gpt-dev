import Image from "next/image";
import img from "../../public/favicon-32x32.png";
export default function App() {
  return (
    <>
      <p>123</p>
      <Image src="https://ibb.co/TMfS1V4" alt="Example Image" />
      <Image src="https://i.ibb.co/GQ6L9KW/wechat.jpg" alt="wechat" />
      <Image src="https://i.ibb.co/1Gg5MDr/wechat.jpg" alt="wechat2" />
      <Image
        src="https://s1.imagehub.cc/images/2023/04/10/3816d1d91252c624d30bbd7102b140d0.jpeg"
        alt="3816d1d91252c624d30bbd7102b140d0.jpeg"
      />
      <Image src={img} alt="Example Image" />
      <Image src="favicon-16x16.png" alt="123" />
    </>
  );
}
