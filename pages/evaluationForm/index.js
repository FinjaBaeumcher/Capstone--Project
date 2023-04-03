import EmojiButtons from "../../components/EmojiButton";
import Button from "../../components/Button";
import { useState } from "react";
import { useRouter } from "next/router";

export default function EvaluationForm() {
  const router = useRouter();
  const [mood, setMood] = useState("");

  function handleSave() {
    const storedMood = JSON.parse(localStorage.getItem("mood"));
    const mood = storedMood?.evaluation || "";
    setMood(mood);
    router.push(`/progressList?evaluation=${mood}`);
  }

  return (
    <>
      <h2>Wie ist deine Stimmung heute?</h2>
      <EmojiButtons onChange={handleSave} />
      <h2>Wie fühlt sich dein Körper?</h2>
      <EmojiButtons />
      <Button href="/" onClick={handleSave}>
        Speichern
      </Button>
    </>
  );
}
