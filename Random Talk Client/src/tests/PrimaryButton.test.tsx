import { render, screen } from "@testing-library/react";
import PrimaryButton from "../components/PrimaryButton";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

it("Should have text content", () => {
  const text = "this is a test";
  render(<PrimaryButton text={text} onClick={() => {}}/>);
  screen.getByText(text);
});

it("Should call callback function OnClick", async () => {
  const fn = vi.fn()
  const text = 'test'
  const user = userEvent.setup();
  render(<PrimaryButton onClick={fn} text={text}/>)

  await user.click(screen.getByText(text));

  expect(fn).toHaveBeenCalled();
})
