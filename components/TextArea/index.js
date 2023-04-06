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
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
