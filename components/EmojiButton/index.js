export default function EmojiButtons() {
  function handleClick(event) {
    const evaluation = event.target.textContent;
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
    </>
  );
}
