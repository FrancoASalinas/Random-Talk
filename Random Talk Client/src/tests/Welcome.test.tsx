import { render, screen } from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import App from "../App";
import { Route, RouterProvider, createMemoryRouter, createRoutesFromElements } from "react-router-dom";

const setup = () => render(<RouterProvider router={createMemoryRouter(createRoutesFromElements(<Route element={<App />} path='/' />), {initialEntries: ['/']})} />)

it("Should render 'Random Talk'", () => {
  setup();
  screen.getByText("Random Talk");
});

it("Should render 'Get Started'", () => {
  setup();
  screen.getByText("Get Started");
});

it("Should render 'I Have An Account'", () => {
  setup();
  screen.getByText("I Have An Account");
});

it("Should render first subtitle", () => {
  setup();
  screen.getByText(/have fun!/i);
});

it("Should render first paragraph", () => {
  setup();
  screen.getByText(/chat with strangers/ig);
});

it("Should render second subtitle", () => {
  setup();
  screen.getByText(/use topics/i);
});

// it.todo('Should navigate to /sign-up when clicking Getting Started', async () => {
//   const user = userEvent.setup();
//   setup();
//   await user.click(screen.getByText('Get Started'));
//   await screen.findByText('Register');
// });

// it.todo('Should navigate to /sign-in when clicking I Have An Account', async () => {

// });

// it("Should render second paragraph", () => {
//   render(<App />);
//   screen.getByText(/connect with people/ig);
// });
