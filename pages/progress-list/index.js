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
    updatedMoods.map((entry, i) => {
      if (i === index) {
        return (updatedMoods[i] = { ...updatedEntry, date: entry.date });
      } else {
        return entry;
      }
    });

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
            <p>{entry.date}:</p>
            {editedIndex === index ? (
              <EditForm
                entry={entry}
                onSubmit={(updatedEntry) => handleSave(index, updatedEntry)}
              />
            ) : (
              <>
                Stimmung: {entry.mood}, Körperliches Wohlbefinden: {entry.body},
                Ich habe {entry.duration} Minuten Yoga gemacht.
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
