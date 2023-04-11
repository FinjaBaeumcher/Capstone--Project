import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function RandomPractices({ pose }) {
  return (
    <StyledList>
      <StyledItem key={pose._id}>
        <StyledLink href={`/flow/${pose._id}`}>
          <Image
            src={pose.url_svg}
            width={200}
            height={200}
            alt={pose.url_svg_alt}
          />
          <StyledPoseName>{pose.peakPose}</StyledPoseName>
          <OriginalName>{pose.sanskrit_name_adapted}</OriginalName>
        </StyledLink>
      </StyledItem>
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
`;

const StyledItem = styled.li`
  list-style: none;
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledPoseName = styled.h2`
  color: purple;
  display: flex;
  justify-content: center;
`;

const OriginalName = styled.p`
  color: mediumpurple;
  display: flex;
  justify-content: center;
`;
