import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../lib/routes";

const setup = () =>
  render(
    <RouterProvider
      router={createMemoryRouter(routes, { initialEntries: ["/"] })}
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
  screen.getByText(/connect with people/gi);
});
