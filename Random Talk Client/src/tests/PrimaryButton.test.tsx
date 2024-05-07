import { render, screen } from "@testing-library/react";
import PrimaryButton from "../components/PrimaryButton";

it("Should have text content", () => {
  const text = "this is a test";
  render(<PrimaryButton text={text} />);
  screen.getByText(text);
});
