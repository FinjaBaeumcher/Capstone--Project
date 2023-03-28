import FlowList from "../../components/FlowList";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function YogaFlows() {
  const { data: flows, error, isLoading } = useSWR("api/flows", fetcher);

  if (error) return <h1>Failed to load</h1>;
  if (isLoading) return <h1>Loading ...</h1>;

  return <FlowList flows={flows} />;
}
