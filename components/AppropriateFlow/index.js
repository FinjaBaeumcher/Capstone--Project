import styled from "styled-components";

export default function AppropriateFlow({ poses, flow }) {
  const { name, description, time } = flow;

  return (
    <article key={poses._id}>
      <StyledHeading>{name}</StyledHeading>
      <StyledDescription>{description}</StyledDescription>
      <StyledTime>{time}</StyledTime>
    </article>
  );
}

const StyledTime = styled.p`
  margin: 10px;
  border: grey 1px solid;
  padding: 5px;
  background-color: lavender;
  border-radius: 8px;
  font-size: 16px;
`;

const StyledHeading = styled.h2`
  color: purple;
  margin: 10px;
  font-size: 24px;
`;

const StyledDescription = styled.p`
  margin: 20px;
  font-size: 18px;
  color: dimgray;
`;
