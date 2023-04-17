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
  color: white;
  border: none;
  padding: 8px 15px;
  margin: 10px;
  margin-bottom: 10px;
`;
