import TestForm from "./lib/TestForm";
import SignIn from "../components/SignIn";

const testForm = new TestForm("Sign In", "Sign In!", <SignIn />);

it("Should render 'Sign In'", () => testForm.assertRendersTitle());

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

it("Should render sign up button", () => {
  testForm.assertRendersButton();
});
