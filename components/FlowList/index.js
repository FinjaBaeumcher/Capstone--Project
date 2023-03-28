export default function FlowList({ flows }) {
  return (
    <>
      <ul>
        {flows.map((flow) => (
          <li key={flow._id}>
            <h2>{flow.name}</h2>
            <p>{flow.description}</p>
            <p>{flow.time}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
