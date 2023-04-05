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
    <form>
      <label htmlFor={htmlFor}>{children}</label>
      <input
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </form>
  );
}
