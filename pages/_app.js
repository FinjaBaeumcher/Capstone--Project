import GlobalStyle from "../styles";
import Head from "next/head";
import Heading from "../components/Heading";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Heading />
      <Component {...pageProps} poses={poses} />
    </>
  );
}
