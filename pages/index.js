import Heading from "../components/Heading";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import Router from "next/router";

export default function Homepage({ poses }) {
  const [filter, setFilter] = useState("");
  const [error, setError] = useState("");

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  const filteredPoses = poses.filter((pose) =>
    pose.benefit.toLowerCase().includes(filter.toLowerCase())
  );

  function handleButtonClick() {
    if (!filter) {
      setError("Bitte wähle einen Körperteil aus oder drücke zufällig!");
      return;
    }

    Router.push({
      pathname: "/peak-pose",
      query: { poses: JSON.stringify(filteredPoses) },
    });
  }

  return (
    <StyledMain>
      <Heading>Yoga App</Heading>
      <StyledForm>
        <StyledLabel htmlFor="poseFilter">
          Auf welchen Körperbereich möchtst du dich konzentrieren?
        </StyledLabel>
        <StyledInput
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
        {error && <StyledError>{error}</StyledError>}
        <StyledButton type="button" onClick={handleButtonClick}>
          Los
        </StyledButton>
      </StyledForm>
      <RandomButton>
        <RandomLink href="/random-peak-pose">Zufällig</RandomLink>
      </RandomButton>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  background-image: url("/background.png");
  background-size: cover;
  background-position: center center;
  width: 375px;
  height: 667px;
  padding-top: 20px;
`;

const StyledLabel = styled.label`
  margin: 20px;
  margin-bottom: 10%;
  font-size: 22px;
  font-weight: 700;
  color: purple;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  position: absolute;
  bottom: 60px;
`;

const StyledButton = styled.button`
  background-color: yellowgreen;
  color: white;
  font-size: 18px;
  border: none;
  padding: 8px 15px;
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  margin-bottom: 40%;
  padding: 8px 15px;
`;

const RandomLink = styled(Link)`
  text-decoration: none;
  color: purple;
  font-size: 18px;
`;

const RandomButton = styled.button`
  background-color: antiquewhite;
  color: white;
  border: none;
  padding: 8px 149px;
  margin: 10px;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
`;

const StyledError = styled.p`
  color: red;
  margin: 20px;
  margin-top: 0;
  font-weight: 500;
`;
