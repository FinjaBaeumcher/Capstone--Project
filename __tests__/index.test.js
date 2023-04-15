import Homepage from "../pages";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: "/",
    };
  },
}));

const poses = [
  { id: 1, name: "Pose 1", benefit: "Beine" },
  { id: 2, name: "Pose 2", benefit: "Bauch" },
];

test("test", () => {
  render(<Homepage poses={poses} />);
  const element = screen.getByRole("heading", {
    name: /YogaMatch/,
  });
  expect(element).toBeInTheDocument();
});
