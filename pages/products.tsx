import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { FC } from "react";

type Props = any;

const Products: FC<Props> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="text-center">
        <h1>Product list</h1>
        <ul
          className="list-unstyled w-50 mx-auto text-start
      "
        >
          {products.map((item: any, index: number) => {
            return (
              <li key={index} style={{ margin: "100px 0" }}>
                <Link
                  className="text-decoration-none text-dark link-primary"
                  href={`products/${item.id}`}
                >
                  {index + 1}. {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return {
    props: {
      products: data.products.map((item: any) => {
        return {
          id: item.id,
          title: item.title,
        };
      }),
    },
  };
};
export default Products;
