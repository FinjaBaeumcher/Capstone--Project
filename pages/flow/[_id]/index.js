import AppropriateFlow from "../../../components/AppropriateFlow";
import { useRouter } from "next/router";
import Button from "../../../components/Button";
import styled from "styled-components";

export default function DetailsPage({ poses }) {
  const router = useRouter();
  const { _id } = router.query;

  if (!_id) {
    return <h1>Loading...</h1>;
  }

  const flowIndex = poses.findIndex((flow) => flow._id === _id);

  if (flowIndex === -1) {
    return <h1>Flow not found</h1>;
  }
  const flow = poses[flowIndex];

  return (
    <StyledMain>
      <AppropriateFlow poses={poses} flow={flow} />
      <Button href="/evaluation-form">Fertig</Button>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  background-color: lavender;
  background-size: cover;
`;
