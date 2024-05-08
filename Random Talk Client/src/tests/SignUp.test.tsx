import SignUp from "../components/SignUp";
import TestForm from "./lib/TestForm";

const testForm = new TestForm("Sign Up", "Sign Up!", <SignUp />);

it("Should render 'Sign Up'", () => testForm.assertRendersTitle());

describe("User Name", () => {
  const label = "User Name";

  it("Should render username input", () => testForm.assertRendersInput(label));

  it("Should update input value if typing into the input", async () =>
    testForm.assertInputGetsValue(label));
});

describe("Password", () => {
  const label = "Password";

  it("Should render password input", () => testForm.assertRendersInput(label));

  it("Should update input value if typing into the input", async () =>
    await testForm.assertInputGetsValue(label));
});

describe("Confirm Password", async () => {
  const label = "Confirm Password";

  it("Should render confirm password input", () =>
    testForm.assertRendersInput(label));

  it("Should update input value if typing into the input", async () =>
    await testForm.assertInputGetsValue(label));
});

it("Should render sign up button", () => {
  testForm.assertRendersButton();
});
