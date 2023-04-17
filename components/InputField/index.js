import styled from "styled-components";

export default function InputField({
  children,
  name,
  type,
  id,
  htmlFor,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={htmlFor}>{children}</label>
      <StyledInput
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

const StyledInput = styled.input`
  display: flex;
  margin: 0 auto;
  padding: 8px;
  background-color: lavender;
  border: 2px solid dimgray;
  border-radius: 8px;
`;
