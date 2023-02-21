import React from "react";
import FooterNoSSR from "../src/layouts/templates/FooterNoSSR";
import HeaderNoSSR from "../src/layouts/templates/HeaderNoSSR";

type Props = {};

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderNoSSR />

      <>{children}</>

      <FooterNoSSR />
    </div>
  );
};

export default Layout;
