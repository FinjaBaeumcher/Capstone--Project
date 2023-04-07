export default function EmojiButton({ emoji, onChange, ariaLabel }) {
  function handleClick(event) {
    const evaluation = event.target.textContent;
    onChange(evaluation);
  }

  return (
    <>
      <button onClick={handleClick}>
        <span role="img" aria-label={ariaLabel}>
          {emoji}
        </span>
      </button>
    </>
  );
}
