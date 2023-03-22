import Heading from "../components/Heading";
import RandomPractice from "../components/Random Practices";

export default function Home({ poses }) {
  if (poses.length < 1) {
    return <h1>Loading ...</h1>;
  }

  const randomPractice = handleRandomPractice();

  function handleRandomPractice() {
    const random = Math.floor(Math.random() * poses.length);
    return random;
  }

  return (
    <main>
      <Heading>Yoga App</Heading>
      <RandomPractice
        name={poses[randomPractice].english_name}
        description={poses[randomPractice].pose_description}
        image={poses[randomPractice].url_svg}
        alt={poses[randomPractice].url_svg_alt}
      />
    </main>
  );
}
