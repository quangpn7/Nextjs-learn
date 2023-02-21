import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";
import Layout from "./layout";

const MyApp = ({ Component, pageProps }): any => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  const PAGE = (
    <Layout>{loading ? "Loading..." : <Component {...pageProps} />}</Layout>
  );
  return <>{PAGE}</>;
};

export default MyApp;
