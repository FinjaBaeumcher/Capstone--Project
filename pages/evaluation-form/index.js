import EmojiButton from "../../components/EmojiButton";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EvaluationForm({ moods, setMoods, date }) {
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

    setMoods([...moods, { mood, body, duration, comment, date }]);
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
      <h2>Wie ist deine Stimmung heute?</h2>
      <EmojiButton emoji="😤" ariaLabel="angry" onChange={handleMoodChange} />
      <EmojiButton emoji="😭" ariaLabel="sad" onChange={handleMoodChange} />
      <EmojiButton emoji="😩" ariaLabel="annoyed" onChange={handleMoodChange} />
      <EmojiButton
        emoji="☹️"
        ariaLabel="disappointed"
        onChange={handleMoodChange}
      />
      <EmojiButton emoji="😕" ariaLabel="bad" onChange={handleMoodChange} />
      <EmojiButton emoji="🙂" ariaLabel="neutral" onChange={handleMoodChange} />
      <EmojiButton
        emoji="😊"
        ariaLabel="cheerful"
        onChange={handleMoodChange}
      />
      <EmojiButton emoji="😁" ariaLabel="happy" onChange={handleMoodChange} />
      <EmojiButton emoji="🥳" ariaLabel="party" onChange={handleMoodChange} />
      <p>{mood}</p>

      <h2>Wie fühlt sich dein Körper?</h2>
      <EmojiButton emoji="😤" ariaLabel="angry" onChange={handleBodyChange} />
      <EmojiButton emoji="😭" ariaLabel="sad" onChange={handleBodyChange} />
      <EmojiButton emoji="😩" ariaLabel="annoyed" onChange={handleBodyChange} />
      <EmojiButton
        emoji="☹️"
        ariaLabel="disappointed"
        onChange={handleBodyChange}
      />
      <EmojiButton emoji="😕" ariaLabel="bad" onChange={handleBodyChange} />
      <EmojiButton emoji="🙂" ariaLabel="neutral" onChange={handleBodyChange} />
      <EmojiButton
        emoji="😊"
        ariaLabel="cheerful"
        onChange={handleBodyChange}
      />
      <EmojiButton emoji="😁" ariaLabel="happy" onChange={handleBodyChange} />
      <EmojiButton emoji="🥳" ariaLabel="party" onChange={handleBodyChange} />
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
          Wie lange habe ich durchgehalten:
        </InputField>
        <p>Minuten</p>
        <TextArea
          htmlFor="comment"
          name="comment"
          type="text"
          id="comment"
          placeholder="Weitere Anmerkungen..."
          onChange={handleCommentChange}
          value={comment}
        >
          Kommentar:
        </TextArea>
      </form>
      <button type="submit" onClick={handleSave}>
        Speichern
      </button>

      {error && <p>{error}</p>}
    </>
  );
}
