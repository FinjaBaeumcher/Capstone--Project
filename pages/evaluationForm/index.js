import EmojiButton from "../../components/EmojiButton";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function EvaluationForm() {
  const router = useRouter();
  const [mood, setMood] = useState("");
  const [body, setBody] = useState("");
  const [moods, setMoods] = useLocalStorageState("moods", {
    defaultValue: [],
  });

  function handleSave() {
    // const storedMoods = JSON.parse(localStorage.getItem("moods")) || [];
    console.log(mood, body);
    setMoods([...moods, { mood, body }]);
    // localStorage.setItem(
    //   "moods",
    //   JSON.stringify([...storedMoods, { mood, body }])
    // );
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
