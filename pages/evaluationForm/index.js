import EmojiButtons from "../../components/EmojiButton";
import Button from "../../components/Button";

export default function Rating() {
  return (
    <>
      <h2>Wie ist deine Stimmung heute?</h2>
      <EmojiButtons />
      <h2>Wie fühlt sich dein Körper?</h2>
      <EmojiButtons />
      <Button href="/">Speichern</Button>
    </>
  );
}
