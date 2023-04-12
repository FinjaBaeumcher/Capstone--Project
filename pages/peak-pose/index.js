import Heading from "../../components/Heading";
import Link from "next/link";
import FilteredPoses from "../../components/FilteredPoses";
import { useRouter } from "next/router";

export default function PeakPose() {
  const router = useRouter();
  const poses = JSON.parse(router.query.poses);

  return (
    <main>
      <Heading>Yoga App</Heading>
      <Link href="/progress-list">Meine Stimmungen</Link>
      <p>Wähle eine Peak Pose:</p>
      <FilteredPoses poses={poses} />
    </main>
  );
}
