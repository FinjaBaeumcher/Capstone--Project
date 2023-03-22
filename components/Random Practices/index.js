import Image from "next/image";

export default function RandomPractice({ name, description, image, alt }) {
  return (
    <ul>
      <li>
        <Image src={image} width={200} height={200} alt={alt} />
      </li>
      <li>
        <h2>{name}</h2>
      </li>
      <li>{description}</li>
    </ul>
  );
}
