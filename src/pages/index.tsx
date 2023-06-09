import { type NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/SidebarWrapper"),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Action Kamen</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicComponentWithNoSSR />
    </>
  );
};

export default Home;
