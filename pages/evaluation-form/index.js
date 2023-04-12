import EmojiButton from "../../components/EmojiButton";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function EvaluationForm({ moods, setMoods, date, weekday }) {
  const router = useRouter();
  const [mood, setMood] = useState("");
  const [body, setBody] = useState("");
  const [duration, setDuration] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  function handleSave() {
    if (!mood || !body) {
      setError(
        "Bitte schätze deine Stimmung und dein körperliches Wohlbefinden ein!"
      );
      return;
    }
    if (!duration) {
      setError("Bitte gebe die Zeit an, die du Yoga gemacht hast");
      return;
    }

    setMoods([...moods, { mood, body, duration, comment, date, weekday }]);
    router.push(`/progress-list`);
  }

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

  function handleCommentChange(event) {
    const commentInput = event.target.value;
    const textLimit = 200;
    setComment(commentInput.slice(0, textLimit));
  }

  return (
    <>
      <StyledHeading>Wie ist deine Stimmung heute?</StyledHeading>
      <StyledEmojiButtons>
        <EmojiButton emoji="😤" ariaLabel="angry" onChange={handleMoodChange} />
        <EmojiButton emoji="😭" ariaLabel="sad" onChange={handleMoodChange} />
        <EmojiButton
          emoji="😩"
          ariaLabel="annoyed"
          onChange={handleMoodChange}
        />
        <EmojiButton
          emoji="☹️"
          ariaLabel="disappointed"
          onChange={handleMoodChange}
        />
        <EmojiButton emoji="😕" ariaLabel="bad" onChange={handleMoodChange} />
        <EmojiButton
          emoji="🙂"
          ariaLabel="neutral"
          onChange={handleMoodChange}
        />
        <EmojiButton
          emoji="😊"
          ariaLabel="cheerful"
          onChange={handleMoodChange}
        />
        <EmojiButton emoji="😁" ariaLabel="happy" onChange={handleMoodChange} />
        <EmojiButton emoji="🥳" ariaLabel="party" onChange={handleMoodChange} />
      </StyledEmojiButtons>
      <p>{mood}</p>

      <StyledHeading>Wie fühlt sich dein Körper?</StyledHeading>
      <StyledEmojiButtons>
        <EmojiButton emoji="😤" ariaLabel="angry" onChange={handleBodyChange} />
        <EmojiButton emoji="😭" ariaLabel="sad" onChange={handleBodyChange} />
        <EmojiButton
          emoji="😩"
          ariaLabel="annoyed"
          onChange={handleBodyChange}
        />
        <EmojiButton
          emoji="☹️"
          ariaLabel="disappointed"
          onChange={handleBodyChange}
        />
        <EmojiButton emoji="😕" ariaLabel="bad" onChange={handleBodyChange} />
        <EmojiButton
          emoji="🙂"
          ariaLabel="neutral"
          onChange={handleBodyChange}
        />
        <EmojiButton
          emoji="😊"
          ariaLabel="cheerful"
          onChange={handleBodyChange}
        />
        <EmojiButton emoji="😁" ariaLabel="happy" onChange={handleBodyChange} />
        <EmojiButton emoji="🥳" ariaLabel="party" onChange={handleBodyChange} />
      </StyledEmojiButtons>
      <p>{body}</p>
      <form>
        <InputField
          htmlFor="time"
          name="time"
          type="number"
          id="time"
          onChange={handleTimeChange}
          value={duration}
        >
          <StyledHeading>Wie lange hast du heute durchgehalten?</StyledHeading>
        </InputField>
        <p> Minuten</p>
        <TextArea
          htmlFor="comment"
          name="comment"
          type="text"
          id="comment"
          placeholder="Weitere Anmerkungen..."
          onChange={handleCommentChange}
          value={comment}
        >
          <StyledHeading>Kommentar:</StyledHeading>
        </TextArea>
      </form>
      <button type="submit" onClick={handleSave}>
        Speichern
      </button>

      {error && <StyledError>{error}</StyledError>}
    </>
  );
}

const StyledEmojiButtons = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 20px;
`;

const StyledHeading = styled.h2`
  font-size: 18px;
  margin: 15px;
  display: flex;
  justify-content: center;
`;

const StyledError = styled.p`
  color: red;
  margin: 20px;
`;
