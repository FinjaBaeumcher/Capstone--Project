import { useState } from "react";

export default function EmojiButton({ onChange }) {
  const [evaluation, setEvaluation] = useState("");

  function handleClick(event) {
    const evaluation = event.target.textContent;
    setEvaluation(evaluation);
    onChange(evaluation);
    console.log(evaluation);
    localStorage.setItem("mood", JSON.stringify({ evaluation }));
  }

  return (
    <>
      <section>
        <button onClick={handleClick}>
          <span>😤</span>
        </button>
        <button onClick={handleClick}>
          <span>😭</span>
        </button>
        <button onClick={handleClick}>
          <span>😩</span>
        </button>
        <button onClick={handleClick}>
          <span>☹️</span>
        </button>
        <button onClick={handleClick}>
          <span>😕</span>
        </button>
        <button onClick={handleClick}>
          <span>🙂</span>
        </button>
        <button onClick={handleClick}>
          <span>😊</span>
        </button>
        <button onClick={handleClick}>
          <span>😁</span>
        </button>
        <button onClick={handleClick}>
          <span>🥳</span>
        </button>
      </section>
      <p>{evaluation}</p>
    </>
  );
}
