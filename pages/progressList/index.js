import { useRouter } from "next/router";

export default function ProgressList() {
  const router = useRouter();
  const saveEvaluation = localStorage.getItem("mood");

  if (!saveEvaluation) {
    return <h2>No Content yet...</h2>;
  }

  return (
    <>
      <p>Deine Stimmung: {saveEvaluation}</p>
    </>
  );
}
