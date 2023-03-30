import Heading from "../components/Heading";
import RandomPoses from "../components/RandomPoses";

export default function Home({ poses }) {
  return (
    <main>
      <Heading>Yoga App</Heading>
      <RandomPoses poses={poses} />
    </main>
  );
}
