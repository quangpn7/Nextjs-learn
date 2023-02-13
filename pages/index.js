import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Link href="/about">About page</Link>
      <h1>Dynamic route</h1>
      <ul>
        <li>
          <Link href={"/detail/1"}>To detail number 1</Link>
        </li>
        <li>
          <Link href={"/detail/2"}>To detail number 2</Link>
        </li>
        <li>
          <Link href={"/detail/3"}>To detail number 3</Link>
        </li>
        <li>
          <Link href={"/detail/4"}>To detail number 4</Link>
        </li>
        <li>
          <Link href={"/detail/5"}>To detail number 5</Link>
        </li>
      </ul>
    </>
  );
}
