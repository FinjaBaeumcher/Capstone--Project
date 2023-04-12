import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import InputField from "../InputField";

export default function FilteredPoses({ poses }) {
  return (
    <>
      <ul>
        {poses.map((pose) => (
          <li key={pose._id}>
            <Link href={`/flow/${pose._id}`}>
              <Image
                src={pose.url_svg}
                width={200}
                height={200}
                alt={pose.url_svg_alt}
              />
              <h2>{pose.peakPose}</h2>
              <p>{pose.sanskrit_name_adapted}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
