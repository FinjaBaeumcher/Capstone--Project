import RandomPoses from "../../components/RandomPoses";
import Heading from "../../components/Heading";
import Link from "next/link";
import styled from "styled-components";

export default function RandomPeakPose({ poses }) {
  return (
    <StyledBody>
      <main>
        <Heading>Yoga App</Heading>
        <StyledLink href="/progress-list" role="img" aria-label="calendar">
          <span>📆</span>
        </StyledLink>
        <StyledHeading>Zufällig</StyledHeading>
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
  font-size: 18px;
`;

const StyledBody = styled.main`
  background-image: linear-gradient(180deg, plum 0%, thistle 82%);
`;

const StyledHeading = styled.h2`
  display: flex;
  justify-content: center;
  color: purple;
  margin: 10px;
  font-siz: 20px;
`;
