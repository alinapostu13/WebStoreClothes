import React from "react";
import { render, screen } from "@testing-library/react";
import MainView from "./Pages/MainView";

test("renders learn react link", () => {
  render(<MainView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
