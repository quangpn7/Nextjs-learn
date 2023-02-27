import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="container">
        <Link href={"/"} className="btn btn-danger">
          Home
        </Link>
        <h1 className="text-center text-danger">Header</h1>
      </div>
    </>
  );
};

export default Header;
