export default function AppropriateFlow({ poses, flow }) {
  const { name, description, time } = flow;

  return (
    <article key={poses._id}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{time}</p>
    </article>
  );
}
