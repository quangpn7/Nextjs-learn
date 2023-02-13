import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
type Props = {};

const Detail = (props: Props) => {
  const route = useRouter();
  const currentId = route.query.id;

  return (
    <>
      <div>Detail page width ID: {currentId}</div>
      <div className="navigate"></div>
      <button
        onClick={() => {
          route.reload();
        }}
      >
        Reload
      </button>
      <button onClick={() => {}}>Next</button>
    </>
  );
};

export default Detail;
