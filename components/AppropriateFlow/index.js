export default function AppropriateFlow({ poses, flow }) {
  const { name, description, time } = flow;

  return (
    <article key={poses._id}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{time}</p>
    </article>
  );
}
