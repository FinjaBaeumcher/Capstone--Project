import Image from "next/image";

export default function PosesList({ poses }) {
  return (
    <ul>
      {poses.map((pose) => (
        <li key={pose._id}>
          <Image
            src={pose.url_svg}
            width={200}
            height={200}
            alt={pose.url_svg_alt}
          />
          <h1>{pose.peakPose}</h1>
          <p>{pose.sanskrit_name_adapted}</p>
        </li>
      ))}
    </ul>
  );
}
