import Heading from "../components/Heading";
import RandomPractice from "../components/Random Practices";

export default function Home({ poses }) {
  if (poses.length < 1) {
    return <h1>Loading ...</h1>;
  }

  const randomPractice = handleRandomPractice();

  function handleRandomPractice() {
    const random1 = Math.floor(Math.random() * poses.length);
    let random2 = random1;
    let random3 = random1;
    while (random2 === random1) {
      random2 = Math.floor(Math.random() * poses.length);
    }
    while (random3 === random1 || random3 === random2) {
      random3 = Math.floor(Math.random() * poses.length);
    }
    return [random1, random2, random3];
  }

  return (
    <main>
      <Heading>Yoga App</Heading>
      {randomPractice.map((randomPractice) => (
        <RandomPractice
          key={poses[randomPractice].id}
          name={poses[randomPractice].english_name}
          description={poses[randomPractice].pose_description}
          image={poses[randomPractice].url_svg}
          alt={poses[randomPractice].url_svg_alt}
        />
      ))}
    </main>
  );
}
