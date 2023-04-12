import FilteredPoses from "../components/FilteredPoses";

export default function Homepage({ poses }) {
  return (
    <>
      <FilteredPoses poses={poses} />
    </>
  );
}
