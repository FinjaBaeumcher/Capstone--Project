import EmojiButton from "../../components/EmojiButton";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EvaluationForm({ moods, setMoods }) {
  const router = useRouter();
  const [mood, setMood] = useState("");
  const [body, setBody] = useState("");

  function handleSave() {
    if (!mood || !body) {
      alert(
        "Bitte schätze deine Stimmung und dein körperliches Wohlbefinden ein!"
      );
      return;
    }
    const currentDate = new Date().toLocaleDateString();
    setMoods([...moods, { mood, body, date: currentDate }]);
    router.push(`/progress-list`);
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
      <p>{mood}</p>

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
      <p>{body}</p>

      <button onClick={handleSave}>Speichern</button>
    </>
  );
}
