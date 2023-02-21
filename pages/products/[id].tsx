import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { FC } from "react";

type Props = {
  data: any;
};

const ProductDetail: FC<Props> = ({ data }) => {
  const { id, title, description, price, images } = data;
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <Head>Loading...</Head>
        <h1 style={{ minHeight: "700px" }}>Loading...</h1>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div style={{ minHeight: "700px" }} className="containe mb-5">
        <Link href={"/products"}>Back to all</Link>

        <h1>Product detail: {id}</h1>
        <h3>Name: {title} </h3>
        <h3>Price: {price} </h3>
        <h3>Desc: {description} </h3>
        <div className="d-flex justify-content-around">
          {images.map((image: string, index: number) => {
            return (
              <Image
                src={image}
                alt="..."
                width={200}
                height={200}
                className="d-block"
                key={index}
              ></Image>
            );
          })}
        </div>

        <div className="text-center mt-5">
          <Link
            className="btn btn-primary"
            href={`/products/${id - 1 < 1 ? 1 : id - 1}`}
          >
            Prev
          </Link>

          <Link className="ms-4 btn btn-success" href={`/products/${id + 1}`}>
            Next
          </Link>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="">Related product</h2>
        <ul className="my-5">
          <li>
            <Link href={`/products/${id + 1}`} scroll={false}>
              View: `scroll={false}`
            </Link>
            ``
          </li>
          <li>
            <Link href={`/products/${id + 2}`}>View: {id + 2}</Link>
          </li>
          <li>
            <Link href={`/products/${id + 3}`}>View: {id + 3}</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
// Config next
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    paths: data.products.map((item: any) => ({
      params: { id: item.id.toString() },
    })),

    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.id;

  if (!id) return { notFound: true };

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 5,
  };
};
export default ProductDetail;
