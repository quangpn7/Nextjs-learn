import Image from "next/image";
import React from "react";
import dummyImage from "../img/toppng.com-technology-background-white-png-ferris-wheel-1255x800.png";
type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div>This is about page</div>
      {/* Import image doesnt required width, height property */}
      <Image src={dummyImage} alt="a background image" priority></Image>
      {/* <Image
        src={
          "/img/toppng.com-technology-background-white-png-ferris-wheel-1255x800.png"
        }
        alt="Another bg"
        width={500}
        height={500}
      ></Image> */}
    </>
  );
};

export default About;
