import GlobalStyle from "../styles";
import Head from "next/head";
import useSWR from "swr";
import PosesList from "../components/PosesList";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
      <PosesList />
    </>
  );
}
