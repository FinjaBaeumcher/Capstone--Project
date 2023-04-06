import Button from "../../components/Button";
import EditForm from "../../components/EditForm";
import { useState } from "react";

export default function ProgressList({ moods, setMoods }) {
  const [editedIndex, setEditedIndex] = useState(null);

  const handleEdit = (index) => {
    setEditedIndex(index);
  };

  const handleSave = (index, updatedEntry) => {
    const updatedMoods = [...moods];
    const currentDate = new Date().toLocaleDateString();
    updatedMoods[index] = { ...updatedEntry, date: currentDate };
    setMoods(updatedMoods);
    setEditedIndex(null);
  };

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
            {editedIndex === index ? (
              <EditForm
                entry={entry}
                onSubmit={(updatedEntry) => handleSave(index, updatedEntry)}
              />
            ) : (
              <>
                {entry.date}: Stimmung: {entry.mood}, Körperliches Wohlbefinden:{" "}
                {entry.body}, Zeit: {entry.duration} Minuten
                {entry.comment && <>, Kommentar:{entry.comment}</>}
                <button onClick={() => handleEdit(index)}>✏️</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <Button href="/">Homepage</Button>
    </>
  );
}
