import EmojiButton from "../../components/EmojiButton";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EvaluationForm({ moods, setMoods }) {
  const router = useRouter();
  const [mood, setMood] = useState("");
  const [body, setBody] = useState("");

  function handleSave() {
    setMoods([...moods, { mood, body }]);
    router.push(`/progressList`);
  }

  function handleMoodChange(newMood) {
    setMood(newMood);
  }

  function handleBodyChange(newBody) {
    setBody(newBody);
  }

  return (
    <>
      <h2>Wie ist deine Stimmung heute?</h2>
      <EmojiButton emoji="😤" onChange={handleMoodChange} />
      <EmojiButton emoji="😭" onChange={handleMoodChange} />
      <EmojiButton emoji="😩" onChange={handleMoodChange} />
      <EmojiButton emoji="☹️" onChange={handleMoodChange} />
      <EmojiButton emoji="😕" onChange={handleMoodChange} />
      <EmojiButton emoji="🙂" onChange={handleMoodChange} />
      <EmojiButton emoji="😊" onChange={handleMoodChange} />
      <EmojiButton emoji="😁" onChange={handleMoodChange} />
      <EmojiButton emoji="🥳" onChange={handleMoodChange} />

      <h2>Wie fühlt sich dein Körper?</h2>
      <EmojiButton emoji="😤" onChange={handleBodyChange} />
      <EmojiButton emoji="😭" onChange={handleBodyChange} />
      <EmojiButton emoji="😩" onChange={handleBodyChange} />
      <EmojiButton emoji="☹️" onChange={handleBodyChange} />
      <EmojiButton emoji="😕" onChange={handleBodyChange} />
      <EmojiButton emoji="🙂" onChange={handleBodyChange} />
      <EmojiButton emoji="😊" onChange={handleBodyChange} />
      <EmojiButton emoji="😁" onChange={handleBodyChange} />
      <EmojiButton emoji="🥳" onChange={handleBodyChange} />
      <button onClick={handleSave}>Speichern</button>
    </>
  );
}
