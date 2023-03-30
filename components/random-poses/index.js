import RandomPractices from "../Random Practices/index.js";

export default function RandomPoses({ poses }) {
  if (!poses || poses.length < 1) {
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
      {randomPractice.map((randomIndex) => (
        <RandomPractices
          key={poses[randomIndex]._id}
          name={poses[randomIndex].peakPose}
          description={poses[randomIndex].sanskrit_name_adapted}
          image={poses[randomIndex].url_svg}
          alt={poses[randomIndex].url_svg_alt}
          pose={poses[randomIndex]}
        />
      ))}
    </>
  );
}
