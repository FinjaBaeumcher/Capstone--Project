import Heading from "../../components/Heading";
import Link from "next/link";
import FilteredPoses from "../../components/FilteredPoses";
import { useRouter } from "next/router";

export default function PeakPose() {
  const router = useRouter();
  const poses = JSON.parse(router.query.poses);
  const benefit = poses[0].benefit;

  return (
    <main>
      <Heading>Yoga App</Heading>
      <Link href="/progress-list">Meine Stimmungen</Link>
      <h2>{benefit}</h2>
      <p>Wähle eine Peak Pose:</p>
      <FilteredPoses poses={poses} />
    </main>
  );
}
