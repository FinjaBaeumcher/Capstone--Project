import { useState } from "react";
import EmojiButton from "../EmojiButton";
import InputField from "../InputField";
import styled from "styled-components";

export default function EditForm({ entry, onSubmit }) {
  const [mood, setMood] = useState(entry.mood || "");
  const [body, setBody] = useState(entry.body || "");
  const [duration, setDuration] = useState(entry.duration || "");
  const [comment, setComment] = useState(entry.comment || "");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ mood, body, duration, comment });
  };

  function handleMoodChange(newMood) {
    setMood(newMood);
  }

  function handleBodyChange(newBody) {
    setBody(newBody);
  }

  function handleTimeChange(event) {
    const input = event.target.value;
    if (input < 0 || isNaN(input)) {
      setError("Gebe eine positive Zahl ein");
      setDuration("");
      return;
    }
    const limit = 3;
    setDuration(input.slice(0, limit));
    setError("");
  }

  return (
    <>
      <StyledText>Stimmung:</StyledText>
      <StyledEmojiButtons>
        <EmojiButton
          emoji="😤"
          ariaLabel="angry"
          name="mood"
          onChange={handleMoodChange}
        />
        <EmojiButton
          emoji="😭"
          ariaLabel="sad"
          name="mood"
          onChange={handleMoodChange}
        />
        <EmojiButton
          emoji="😩"
          ariaLabel="annoyed"
          name="mood"
          onChange={handleMoodChange}
        />
        <EmojiButton
          emoji="☹️"
          ariaLabel="disappointed"
          name="mood"
          onChange={handleMoodChange}
        />
        <EmojiButton
          emoji="😕"
          ariaLabel="bad"
          name="mood"
          onChange={handleMoodChange}
        />
        <EmojiButton
          emoji="🙂"
          ariaLabel="neutral"
          name="mood"
          onChange={handleMoodChange}
        />
        <EmojiButton
          emoji="😊"
          ariaLabel="cheerful"
          name="mood"
          onChange={handleMoodChange}
        />
        <EmojiButton
          emoji="😁"
          ariaLabel="happy"
          name="mood"
          onChange={handleMoodChange}
        />
        <EmojiButton
          emoji="🥳"
          ariaLabel="party"
          name="mood"
          onChange={handleMoodChange}
        />
      </StyledEmojiButtons>
      <StyledText>{mood}</StyledText>

      <StyledText>Körperliches Wohlbefinden:</StyledText>
      <StyledEmojiButtons>
        <EmojiButton
          emoji="😤"
          ariaLabel="angry"
          name="body"
          onChange={handleBodyChange}
        />
        <EmojiButton
          emoji="😭"
          ariaLabel="sad"
          name="body"
          onChange={handleBodyChange}
        />
        <EmojiButton
          emoji="😩"
          ariaLabel="annoyed"
          name="body"
          onChange={handleBodyChange}
        />
        <EmojiButton
          emoji="☹️"
          ariaLabel="disappointed"
          name="body"
          onChange={handleBodyChange}
        />
        <EmojiButton
          emoji="😕"
          ariaLabel="bad"
          name="body"
          onChange={handleBodyChange}
        />
        <EmojiButton
          emoji="🙂"
          ariaLabel="neutral"
          name="body"
          onChange={handleBodyChange}
        />
        <EmojiButton
          emoji="😊"
          ariaLabel="cheerful"
          name="body"
          onChange={handleBodyChange}
        />
        <EmojiButton
          emoji="😁"
          ariaLabel="happy"
          name="body"
          onChange={handleBodyChange}
        />
        <EmojiButton
          emoji="🥳"
          ariaLabel="party"
          name="body"
          onChange={handleBodyChange}
        />
      </StyledEmojiButtons>
      <StyledText>{body}</StyledText>

      <form onSubmit={handleSubmit}>
        <InputField
          htmlFor="time"
          name="time"
          type="number"
          id="time"
          onChange={handleTimeChange}
          value={duration}
        >
          <StyledText>Zeit:</StyledText>
        </InputField>
        <StyledText>Minuten</StyledText>
        <StyledTextArea
          htmlFor="comment"
          name="comment"
          type="text"
          id="comment"
          placeholder="Weitere Anmerkungen..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        >
          <StyledText>Kommentar:</StyledText>
        </StyledTextArea>
        <StyledButton type="submit">Speichern</StyledButton>
      </form>
      {error && <StyledError>{error}</StyledError>}
    </>
  );
}

const StyledEmojiButtons = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 20px;
  border-radius: 8px;
`;

const StyledText = styled.p`
  margin: 10px;
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

const StyledTextArea = styled.textarea`
  padding: 30px 50px;
  margin: 20px;
  border: 2px gray solid;
  border-radius: 8px;
  background-color: lightgray;
`;

const StyledButton = styled.button`
  background-color: yellowgreen;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const StyledError = styled.p`
  color: red;
  margin: 20px;
`;
