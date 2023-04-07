import { useState } from "react";
import EmojiButton from "../EmojiButton";
import InputField from "../InputField";
import TextArea from "../TextArea";

export default function EditForm({ entry, onSubmit }) {
  const [mood, setMood] = useState(entry.mood || "");
  const [body, setBody] = useState(entry.body || "");
  const [duration, setDuration] = useState(entry.duration || "");
  const [comment, setComment] = useState(entry.comment || "");

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

  return (
    <>
      <p>Stimmung:</p>
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
      <p>{mood}</p>

      <p>Körperliches Wohlbefinden:</p>
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
      <p>{body}</p>

      <form onSubmit={handleSubmit}>
        <InputField
          htmlFor="time"
          name="time"
          type="number"
          id="time"
          onChange={(e) => setDuration(e.target.value)}
          value={duration}
        >
          Zeit:
        </InputField>
        <p>Minuten</p>
        <TextArea
          htmlFor="comment"
          name="comment"
          type="text"
          id="comment"
          placeholder="Weitere Anmerkungen..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        >
          Kommentar:
        </TextArea>
        <button type="submit">Speichern</button>
      </form>
    </>
  );
}
