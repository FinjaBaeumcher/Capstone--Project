import Link from "next/link";
import styled from "styled-components";

export default function Button({ children, href }) {
  return (
    <Link href={href}>
      <StyledButton>{children}</StyledButton>
    </Link>
  );
}

const StyledButton = styled.button`
  background-color: yellowgreen;
  border: none;
  padding: 8px 15px;
  color: white;
  margin: 10px;
  margin-bottom: 10px;
  position: absolute;
  right: 0px;
`;
