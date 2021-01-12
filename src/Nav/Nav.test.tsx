import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import Nav from "./Nav";

describe("Nav", () => {
  it("should render the Nav component", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("link", { name: /game sleuth logo sleuth/i })
    ).toBeInTheDocument();
  });
});
