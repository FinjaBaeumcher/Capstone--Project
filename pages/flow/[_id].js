import AppropriateFlow from "../../components/AppropriateFlow";
import { useRouter } from "next/router";

export default function DetailsPage({ poses }) {
  const router = useRouter();
  const { _id } = router.query;

  const flowIndex = poses.findIndex((flow) => flow._id === _id);

  const flow = poses[flowIndex];

  return <AppropriateFlow poses={poses} flow={flow} />;
}
