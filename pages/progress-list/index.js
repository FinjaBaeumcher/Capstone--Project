import Button from "../../components/Button";
import EditForm from "../../components/EditForm";
import { useState } from "react";
import styled from "styled-components";
import { Dancing_Script } from "@next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function ProgressList({ moods, setMoods }) {
  const [editedIndex, setEditedIndex] = useState(null);

  const handleEdit = (index) => {
    const editedIndex = moods.length - 1 - index;
    setEditedIndex(editedIndex);
  };

  const handleSave = (index, updatedEntry) => {
    const updatedMoods = [...moods];
    updatedMoods.map((entry, i) => {
      if (i === moods.length - 1 - index) {
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

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Bist du sicher, dass du diesen Eintrag löschen möchtest?"
    );
    if (confirmDelete) {
      const updatedMoods = moods.slice();
      updatedMoods.splice(index, 1);
      setMoods(updatedMoods);
    }
  };

  if (!moods.length) {
    return (
      <>
        <h2>Noch kein Inhalt!</h2>
        <p>
          Hier werden deine Stimmungen gespeichert. Diese kannst du eingeben,
          indem du einen Flow beendest und auf &quot;Fertig&quot; klickst.
        </p>
      </>
    );
  }

  if (!Array.isArray(moods)) {
    return <h2>Kein Inhalt</h2>;
  }

  return (
    <>
      <StyledHeading>Meine Stimmungen:</StyledHeading>
      <ul>
        {moods
          .slice(0)
          .reverse()
          .map((entry, index) => (
            <StyledListItem key={index} lastChild={index === moods.length - 1}>
              <StyledDate>
                {entry.weekday}, {entry.date}:
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
                  <StyledText>
                    Körperliches Wohlbefinden:{entry.body}
                  </StyledText>

                  {entry.comment && (
                    <>
                      <p>Kommentar:</p>
                      <StyledComment>{entry.comment}</StyledComment>
                    </>
                  )}
                  <StyledEditButton
                    onClick={() => handleEdit(moods.length - 1 - index)}
                  >
                    ✏️
                  </StyledEditButton>
                  <StyledDeleteButton
                    onClick={() => handleDelete(moods.length - 1 - index)}
                  >
                    🗑️
                  </StyledDeleteButton>
                </section>
              )}
            </StyledListItem>
          ))}
      </ul>
      <HomepageButton>
        <Button href="/">Homepage</Button>
      </HomepageButton>
    </>
  );
}

const StyledDate = styled.h3`
  display: flex;
  justify-content: center;
  font-family: ${dancingScript.style.fontFamily};
  color: purple;
  margin: 20px;
`;

const StyledComment = styled.p`
  background-color: lightgrey;
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

const StyledListItem = styled.li`
  position: relative;
  background-color: lavender;
  border: gray 1px solid;
  border-radius: 8px;
  padding: 10px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: ${(props) => (props.lastChild ? "30px" : "10px")};
  list-style: none;

  &:lst-child {
    margin-margin: 30px;
  }
`;

const StyledEditButton = styled.div`
  position: absolute;
  top: 5px;
  right: 50px;
  border: none;
  font-size: 18px;
  background-color: purple;
  padding: 2px 5px;
  border-radius: 360px;
`;

const StyledDeleteButton = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  border: none;
  font-size: 18px;
  background-color: purple;
  padding: 2px 5px;
  border-radius: 360px;
`;

const HomepageButton = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const StyledHeading = styled.h2`
  margin: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: purple;
`;
