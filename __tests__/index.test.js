import Home from "../pages";
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
  render(<Home />);
  const element = screen.getByRole("heading", {
    name: /Failed to load/,
  });
  expect(element).toBeInTheDocument();
});
