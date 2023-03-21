import GlobalStyle from "@/styles";
import Head from "next/head";
import useSWR from "swr";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data } = useSWR("https://yoga-api-nzy4.onrender.com/v1", fetcher);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
