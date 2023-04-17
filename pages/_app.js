import GlobalStyle from "../styles";
import Head from "next/head";
import useSWR from "swr";
import Heading from "../components/Heading";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data: poses, error, isLoading } = useSWR("api/flows", fetcher);

  const [moods, setMoods] = useLocalStorageState("moods", {
    defaultValue: [],
  });

  const currentDate = new Date().toLocaleDateString();
  const weekday = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];
  const day = weekday[new Date().getDay()];

  if (error) return <h1>Laden fehlgeschlagen</h1>;
  if (isLoading) return <h1>Laden ...</h1>;

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Heading poses={poses} />
      <Component
        {...pageProps}
        poses={poses}
        moods={moods}
        setMoods={setMoods}
        date={currentDate}
        weekday={day}
      />
    </>
  );
}
