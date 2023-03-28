import RandomPractices from "../Random Practices/index.js";

export default function RandomPoses({ poses }) {
  if (poses.length < 1) {
    return <h1> No content</h1>;
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
    <>
      {randomPractice.map((randomPractice) => (
        <RandomPractices
          key={poses[randomPractice].id}
          name={poses[randomPractice].english_name}
          description={poses[randomPractice].pose_description}
          image={poses[randomPractice].url_svg}
          alt={poses[randomPractice].url_svg_alt}
        />
      ))}
    </>
  );
}
