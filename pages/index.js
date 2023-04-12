import Heading from "../components/Heading";
import Link from "next/link";
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
    <>
      <Heading>Yoga App</Heading>
      <form>
        <label htmlFor="poseFilter">
          Auf welchen Körperbereich möchtst du dich konzentrieren?
        </label>
        <input
          list="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filter nach Körperteil"
          name="poseFilter"
          type="text"
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
      </form>
      <button onClick={handleButtonClick}>Los</button>
      <button>
        <Link href="/random-peak-pose">Zufällig</Link>
      </button>
    </>
  );
}
