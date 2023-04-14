import styled from "styled-components";

export default function AppropriateFlow({ poses, flow }) {
  const { name, description, time } = flow;

  function formatText(text) {
    return text.split(".").map((part, i) => {
      return i % 2 === 0 ? <p key={i}>{part}</p> : <span key={i}>{part}</span>;
    });
  }

  return (
    <article key={poses._id}>
      <StyledHeading>{name}</StyledHeading>
      <StyledDescription>{formatText(description)}</StyledDescription>
      <StyledTime>{time}</StyledTime>
    </article>
  );
}

const StyledTime = styled.p`
  margin: 10px;
  border: grey 1px solid;
  padding: 5px;
  background-color: mediumpurple;
  border-radius: 8px;
  font-size: 16px;
`;

const StyledHeading = styled.h2`
  color: purple;
  padding: 10px;
  font-size: 24px;
  text-align: center;
`;

const StyledDescription = styled.p`
  margin: 20px;
  font-size: 18px;
  color: dimgray;
  text-align: center;
`;
