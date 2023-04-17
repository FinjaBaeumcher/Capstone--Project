import styled from "styled-components";

export default function EmojiButton({ emoji, onChange, ariaLabel }) {
  function handleClick(event) {
    const evaluation = event.target.textContent;
    onChange(evaluation);
  }

  return (
    <>
      <StyledEmojiButton onClick={handleClick}>
        <span role="img" aria-label={ariaLabel}>
          {emoji}
        </span>
      </StyledEmojiButton>
    </>
  );
}

const StyledEmojiButton = styled.section`
  border: none;
`;
