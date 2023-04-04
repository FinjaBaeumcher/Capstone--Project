export default function EmojiButton({ emoji, onChange }) {
  function handleClick(event) {
    const evaluation = event.target.textContent;
    onChange(evaluation);
  }

  return (
    <>
      <button onClick={handleClick}>
        <span>{emoji}</span>
      </button>
    </>
  );
}
