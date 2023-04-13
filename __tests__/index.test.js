import RandomPeakPose from "../pages/random-peak-pose";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: "/",
    };
  },
}));

test("test", () => {
  render(<RandomPeakPose />);
  const element = screen.getByRole("heading", {
    name: /Yoga App/,
  });
  expect(element).toBeInTheDocument();
});
