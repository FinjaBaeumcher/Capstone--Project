import Image from "next/image";
import Link from "next/link";

export default function RandomPractices({
  key,
  name,
  description,
  image,
  alt,
}) {
  return (
    <ul>
      <Link href="/flowList">
        <li key={key}>
          <Image src={image} width={200} height={200} alt={alt} />
          <h2>{name}</h2>
          {description}
        </li>
      </Link>
    </ul>
  );
}
