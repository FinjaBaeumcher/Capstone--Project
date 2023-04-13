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
  justify-item: center;
  backgrounnd-color: lavender;
`;
