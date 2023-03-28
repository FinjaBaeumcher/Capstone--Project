import GlobalStyle from "../styles";
import Head from "next/head";
import useSWR from "swr";
import Heading from "../components/Heading";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {
    data: poses,
    error,
    isLoading,
  } = useSWR("https://yoga-api-nzy4.onrender.com/v1/poses", fetcher);

  if (error) return <h1>Failed to load</h1>;
  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Heading poses={poses} />
      <Component {...pageProps} poses={poses} />
    </>
  );
}
