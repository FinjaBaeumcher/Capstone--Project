import Heading from "../components/Heading";
import Link from "next/link";
import RandomPoses from "../components/random-poses";

export default function Home({ poses }) {
  return (
    <main>
      <Heading>Yoga App</Heading>
      <Link href="/flowList">FlowList</Link>
      <RandomPoses poses={poses} />
    </main>
  );
}
