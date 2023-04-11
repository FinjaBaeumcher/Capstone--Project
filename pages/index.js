import Heading from "../components/Heading";
import RandomPoses from "../components/RandomPoses";
import Link from "next/link";
import styled from "styled-components";

export default function Home({ poses }) {
  return (
    <StyledBody>
      <main>
        <Heading>Yoga App</Heading>
        <StyledLink href="/progress-list" role="img" aria-label="calendar">
          <span>📆</span>
        </StyledLink>
        <StyledDescription>Wähle eine Peak Pose:</StyledDescription>
        <RandomPoses poses={poses} />
      </main>
    </StyledBody>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 26px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const StyledDescription = styled.p`
  display: flex;
  justify-content: center;
  color: purple;
`;

const StyledBody = styled.main`
  background-image: linear-gradient(180deg, plum 0%, thistle 82%);
`;
