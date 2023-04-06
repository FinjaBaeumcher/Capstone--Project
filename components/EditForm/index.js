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
      <EmojiButton emoji="😤" name="mood" onChange={handleMoodChange} />
      <EmojiButton emoji="😭" name="mood" onChange={handleMoodChange} />
      <EmojiButton emoji="😩" name="mood" onChange={handleMoodChange} />
      <EmojiButton emoji="☹️" name="mood" onChange={handleMoodChange} />
      <EmojiButton emoji="😕" name="mood" onChange={handleMoodChange} />
      <EmojiButton emoji="🙂" name="mood" onChange={handleMoodChange} />
      <EmojiButton emoji="😊" name="mood" onChange={handleMoodChange} />
      <EmojiButton emoji="😁" name="mood" onChange={handleMoodChange} />
      <EmojiButton emoji="🥳" name="mood" onChange={handleMoodChange} />
      <p>{mood}</p>

      <p>Körperliches Wohlbefinden:</p>
      <EmojiButton emoji="😤" name="body" onChange={handleBodyChange} />
      <EmojiButton emoji="😭" name="body" onChange={handleBodyChange} />
      <EmojiButton emoji="😩" name="body" onChange={handleBodyChange} />
      <EmojiButton emoji="☹️" name="body" onChange={handleBodyChange} />
      <EmojiButton emoji="😕" name="body" onChange={handleBodyChange} />
      <EmojiButton emoji="🙂" name="body" onChange={handleBodyChange} />
      <EmojiButton emoji="😊" name="body" onChange={handleBodyChange} />
      <EmojiButton emoji="😁" name="body" onChange={handleBodyChange} />
      <EmojiButton emoji="🥳" name="body" onChange={handleBodyChange} />
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
