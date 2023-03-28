import Heading from "../components/Heading";
import Link from "next/link";
import RandomPoses from "../components/random-poses";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const {
    data: poses,
    error,
    isLoading,
  } = useSWR("https://yoga-api-nzy4.onrender.com/v1/poses", fetcher);

  if (error) return <h1>Failed to load</h1>;
  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <main>
      <Heading>Yoga App</Heading>
      <Link href="/flowList">FlowList</Link>
      <RandomPoses poses={poses} />
    </main>
  );
}
