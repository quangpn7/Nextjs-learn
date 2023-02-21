import dynamic from "next/dynamic";

const HeaderNoSSR = dynamic(() => import("./Header"), {
  ssr: false,
});

export default HeaderNoSSR;
