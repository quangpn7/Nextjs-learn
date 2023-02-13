import React from "react";
import { Roboto } from "@next/font/google";
type Props = {};

// Get font
const roboto = Roboto({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "700"],
});

const Font = (props: Props) => {
  return (
    <div>
      <h1>Test font</h1>
      <p className={roboto.className}>Font with Roboto</p>
      <p className={roboto.className}>Chữ Việt with Roboto</p>
    </div>
  );
};

export default Font;
