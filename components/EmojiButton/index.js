export default function EmojiButton({ emoji, onChange }) {
  function handleClick(event) {
    const evaluation = event.target.textContent;
    onChange(evaluation);
    console.log(evaluation);
    localStorage.setItem("emoji", JSON.stringify(evaluation));
  }

  return (
    <>
      <button onClick={handleClick}>
        <span>{emoji}</span>
      </button>
    </>
  );
}
