import { render, screen } from "@testing-library/react";
import SignUp from "../components/SignUp";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";

it("Should render 'Sign Up'", () => {
  setup();
  screen.getByText("Sign Up");
});

describe("User Name", () => {
  const label = "User Name";

  it("Should render username input", () => setupAndGetByLabel(label));

  it("Should update input value if typing into the input", async () =>
    await setupAndAssertValue(label));
});

describe("Password", () => {
  it("Should render password input", () => setupAndGetByLabel("Password"));

  it("Should update input value if typing into the input", async () =>
    await setupAndAssertValue("Password"));
});

describe("Confirm Password", async () => {
  it("Should render confirm password input", () => setupAndGetByLabel("Confirm Password"));

  it("Should update input value if typing into the input", async () =>
    setupAndAssertValue("Confirm Password"));
});

it("Should render sign up button", () => {
  setup();
  screen.getByText("Sign Up!");
});

function setup() {
  return { user: userEvent.setup(), ...render(<SignUp />) };
}

function setupAndGetByLabel(label: string) {
  setup();
  screen.getByLabelText(label);
}

async function setupAndAssertValue(label: string) {
  const { user } = setup();
  const text = "testing text";

  const input = screen.getByLabelText(label);
  await user.type(input, text);
  expect(input).toHaveValue(text);
}
