import Image from "next/image";

export default function RandomPractices({
  key,
  name,
  description,
  image,
  alt,
}) {
  return (
    <ul>
      <li key={key}>
        <Image src={image} width={200} height={200} alt={alt} />
        <h2>{name}</h2>
        {description}
      </li>
    </ul>
  );
}
