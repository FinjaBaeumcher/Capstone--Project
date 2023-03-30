import Heading from "../components/Heading";
import Link from "next/link";
import RandomPoses from "../components/random-poses";

export default function Home({ poses }) {
  return (
    <main>
      <Heading>Yoga App</Heading>
      <RandomPoses poses={poses} />
    </main>
  );
}
