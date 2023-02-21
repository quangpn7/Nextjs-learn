import dynamic from "next/dynamic";

const FooterNoSSR = dynamic(() => import("./Footer"), {
  ssr: false,
});

export default FooterNoSSR;

export const getStaticProps = () => {
  console.log("Render on browser");
  return {
    props: {
      type: "This is NoSSR",
    },
  };
};
