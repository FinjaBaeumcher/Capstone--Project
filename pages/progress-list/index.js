import Button from "../../components/Button";
export default function ProgressList() {
  const storedMoods = JSON.parse(localStorage.getItem("moods")) || [];

  if (!storedMoods.length) {
    return <h2>No Content yet...</h2>;
  }

  if (!Array.isArray(storedMoods)) {
    return <h2>No Content</h2>;
  }

  return (
    <>
      <h2>Meine Stimmungen:</h2>
      <ul>
        {storedMoods.map((entry, index) => (
          <li key={index}>
            {entry.date}: Stimmung: {entry.mood}, Körperliches Wohlbefinden:{" "}
            {entry.body}, Ich habe {entry.duration} Minuten Yoga gemacht.
          </li>
        ))}
      </ul>
      <Button href="/">Homepage</Button>
    </>
  );
}
