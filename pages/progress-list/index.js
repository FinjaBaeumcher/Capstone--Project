import Button from "../../components/Button";
export default function ProgressList({ moods }) {
  if (!moods.length) {
    return <h2>No Content yet...</h2>;
  }

  if (!Array.isArray(moods)) {
    return <h2>No Content</h2>;
  }

  return (
    <>
      <h2>Meine Stimmungen:</h2>
      <ul>
        {moods.map((entry, index) => (
          <li key={index}>
            {entry.date}: Stimmung: {entry.mood}, Körperliches Wohlbefinden:{" "}
            {entry.body}, Zeit: {entry.duration} Minuten
            {entry.comment && <>, Kommentar:{entry.comment}</>}
          </li>
        ))}
      </ul>
      <Button href="/">Homepage</Button>
    </>
  );
}
