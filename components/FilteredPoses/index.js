import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function FilteredPoses({ poses }) {
  return (
    <>
      <ul>
        {poses.map((pose) => (
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
        ))}
      </ul>
    </>
  );
}

const StyledItem = styled.li`
  list-style: none;
  margin-top: 30px;
  display: flex;
  justify-content: center;
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
