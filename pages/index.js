import Heading from "../components/Heading";
import RandomPoses from "../components/RandomPoses";
import Link from "next/link";

export default function Home({ poses }) {
  return (
    <main>
      <Heading>Yoga App</Heading>
      <Link href="/progress-list">Mein Fortschritt</Link>
      <RandomPoses poses={poses} />
    </main>
  );
}
