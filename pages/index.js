import Heading from "../components/Heading";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import Router from "next/router";

export default function Homepage({ poses }) {
  const [filter, setFilter] = useState("");

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  const filteredPoses = poses.filter((pose) =>
    pose.benefit.toLowerCase().includes(filter.toLowerCase())
  );

  function handleButtonClick() {
    Router.push({
      pathname: "/peak-pose",
      query: { poses: JSON.stringify(filteredPoses) },
    });
  }

  return (
    <StyledBody>
      <Heading>Yoga App</Heading>
      <StyledMain>
        <StyledForm>
          <StyledLabel htmlFor="poseFilter">
            Auf welchen Körperbereich möchtst du dich konzentrieren?
          </StyledLabel>
          <input
            list="filter"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filter nach Körperteil"
            name="poseFilter"
            type="text"
            pattern="[A-Za-z\s]+"
            title="Bitte verwenden Sie nur Buchstaben und Leerzeichen."
            id="poseFilter"
          />
          <datalist id="filter">
            <>
              <option value="Arme" />
              <option value="Bauch" />
              <option value="Beine" />
              <option value="Brust" />
              <option value="Hintern" />
              <option value="Hüfte" />
              <option value="Nacken-Schulter-Bereich" />
              <option value="Rücken" />
            </>
          </datalist>
        </StyledForm>
        <StyledButton type="button" onClick={handleButtonClick}>
          Los
        </StyledButton>
        <button>
          <Link href="/random-peak-pose">Zufällig</Link>
        </button>
      </StyledMain>
    </StyledBody>
  );
}

const StyledMain = styled.main`
  position: absolute;
  bottom: 30px;
  margin: 20px;
`;

const StyledBody = styled.body`
  background-color: plum;
`;

const StyledLabel = styled.label`
  margin: 10px;
  color: dimgray;
  font-size: 20px;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
`;

const StyledButton = styled.button`
  background-color: yellowgreen;
  color: white;
  border: none;
  padding: 8px 15px;
  margin: 10px;
  display: flex;
  justify-content: center;
`;
