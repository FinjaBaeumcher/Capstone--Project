import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import InputField from "../InputField";

export default function FilteredPoses({ poses }) {
  const [filter, setFilter] = useState("");

  function handleSave(event) {
    setFilter(event.target.value);
  }

  const filteredResults = poses.filter((pose) =>
    pose.benefit.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <InputField value={filter} onChange={handleSave}>
        Auf welchen Körperbereich möchtst du dich konzentrieren?
      </InputField>
      <ul>
        {filteredResults.map((pose) => (
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
