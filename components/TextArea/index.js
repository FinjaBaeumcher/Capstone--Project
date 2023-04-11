import styled from "styled-components";

export default function TextArea({
  children,
  name,
  id,
  htmlFor,
  value,
  onChange,
  placeholder,
}) {
  return (
    <>
      <label htmlFor={htmlFor}>{children}</label>
      <StyledTextArea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

const StyledTextArea = styled.textarea`
  padding: 30px 80px;
  margin: 20px;
  border: 2px gray solid;
  border-radius: 8px;
`;
