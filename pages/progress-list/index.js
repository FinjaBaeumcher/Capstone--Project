import Button from "../../components/Button";
import EditForm from "../../components/EditForm";
import { useState } from "react";
import styled from "styled-components";
import { Dancing_Script } from "@next/font/google";

const dacingScript = Dancing_Script({ subsets: ["latin"] });

export default function ProgressList({ moods, setMoods }) {
  const [editedIndex, setEditedIndex] = useState(null);

  const handleEdit = (index) => {
    setEditedIndex(index);
  };

  const handleSave = (index, updatedEntry) => {
    const updatedMoods = [...moods];
    updatedMoods.map((entry, i) => {
      if (i === index) {
        return (updatedMoods[i] = {
          ...updatedEntry,
          date: entry.date,
          weekday: entry.weekday,
        });
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
            <StyledDate>
              {entry.weekday},{entry.date}:
            </StyledDate>
            {editedIndex === index ? (
              <EditForm
                entry={entry}
                onSubmit={(updatedEntry) => handleSave(index, updatedEntry)}
              />
            ) : (
              <section>
                <StyledText>
                  Ich habe {entry.duration} Minuten Yoga gemacht.
                </StyledText>
                <StyledText>Stimmung: {entry.mood}</StyledText>
                <StyledText>Körperliches Wohlbefinden:{entry.body}</StyledText>

                {entry.comment && (
                  <>
                    <p>Kommentar:</p>
                    <StyledComment>{entry.comment}</StyledComment>
                  </>
                )}
                <button onClick={() => handleEdit(index)}>✏️</button>
              </section>
            )}
          </li>
        ))}
      </ul>
      <Button href="/">Homepage</Button>
    </>
  );
}

const StyledDate = styled.h3`
  display: flex;
  justify-content: center;
  font-family: ${dacingScript.style.fontFamily};
  color: purple;
  margin: 20px;
`;

const StyledComment = styled.p`
  background-color: lavender;
  border: gray 3px solid;
  border-radius: 8px;
  padding: 10px;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 10px;
  overflow-wrap: break-word;
`;

const StyledText = styled.p`
  display: flex;
  justify-content: center;
`;
