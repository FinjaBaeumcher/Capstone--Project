import useSWR from "swr";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PosesList() {
  const {
    data: poses,
    error,
    isLoading,
  } = useSWR("https://yoga-api-nzy4.onrender.com/v1/poses", fetcher);

  if (error) return <h1>Failed</h1>;
  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <ul>
      {poses.map((pose) => (
        <li key={pose.id}>
          <h1>{pose.english_name}</h1>
          <Image
            src={pose.url_svg}
            height={200}
            width={200}
            alt={pose.url_svg_alt}
          />
        </li>
      ))}
    </ul>
  );
}
