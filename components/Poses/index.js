import PosesList from "../PosesList";

export default function Poses({ poses }) {
  return poses.map((pose) => {
    console.log(pose);
    return (
      <ul key={pose.id}>
        <PosesList poses={pose} />
      </ul>
    );
  });
}
