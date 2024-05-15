import { render, screen } from "@testing-library/react";
import Chat from "../pages/Chat";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

function setup() {
  return {
    user: userEvent.setup(),
    ...render(<Chat />),
  };
}

const chatElements = {
  get sendButton() {
    return screen.getByText("Send");
  },
  get input() {
    return screen.getByPlaceholderText("Type something...");
  },
};

it("Should render an input with the placeholder: 'Type something...", () => {
  setup();
  chatElements.input;
});

it("Should render a button with the text 'Send'", () => {
  setup();
  chatElements.sendButton;
});

it("Should empty input if user clicks Send button", async () => {
  const { user } = setup();
  const { sendButton, input } = chatElements;
  const text = "something";

  await user.type(input, text);
  expect(input).toHaveValue(text);

  await user.click(sendButton);
  expect(input).toHaveValue("");
});

it("Should render the message when user sends one", async () => {
  const { user } = setup();
  const text = "testing";
  const { sendButton, input } = chatElements;

  await user.type(input, text);
  await user.click(sendButton);

  expect(screen.getByText(text));
});

it("Should render the messages when user sends two of them", async () => {
  const { user } = setup();
  const text1 = "testing this";
  const text2 = "testing that";
  const { sendButton, input } = chatElements;

  await user.type(input, text1);
  await user.click(sendButton);

  await user.type(input, text2);
  await user.click(sendButton);

  expect(screen.getByText(text1));
  expect(screen.getByText(text2));
});

// it("Should disable button if user doesn't type anything", async () => {
//     const {user} = setup();
//     const input = screen.getByPlaceholderText('Type something...');
//     const button = screen.getByText('Send');

//     await
// });

it.todo("Should empty");
