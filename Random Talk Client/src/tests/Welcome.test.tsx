import { render, screen } from "@testing-library/react";
import App from "../App";
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from "react-router-dom";

const setup = () =>
  render(
    <RouterProvider
      router={createMemoryRouter(
        createRoutesFromElements(<Route element={<App />} path='/' />),
        { initialEntries: ["/"] }
      )}
    />
  );

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
  screen.getByText(/chat with strangers/gi);
});

it("Should render second subtitle", () => {
  setup();
  screen.getByText(/use topics/i);
});

it("Should render second paragraph", () => {
  setup();
  screen.getByText(/connect with people/ig);
});

it("Should render Sign Up", () => {
  setup();
  screen.getByText("Sign Up")
})

it("Should render Sign In", () => {
  setup();
  screen.getByText("Sign In")
})
