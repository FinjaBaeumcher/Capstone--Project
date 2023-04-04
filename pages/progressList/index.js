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
      <ul>
        {storedMoods.map((entry, index) => (
          <li key={index}>
            Stimmung: {entry.mood}, Körperliches Wohlbefinden: {entry.body}
          </li>
        ))}
      </ul>
    </>
  );
}
