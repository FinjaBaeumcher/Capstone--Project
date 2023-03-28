import Image from "next/image";

export default function PosesList({ poses }) {
  return (
    <ul>
      {poses.map((pose) => (
        <li key={pose.id}>
          <Image
            src={pose.url_svg}
            width={200}
            height={200}
            alt={pose.url_svg_alt}
          />
          <h1>{pose.english_name}</h1>
          <p>{pose.pose_description}</p>
        </li>
      ))}
    </ul>
  );
}
