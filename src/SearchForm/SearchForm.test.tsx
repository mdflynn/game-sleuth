import React from "react";
import {
  fireEvent,
  render,
  screen
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import SearchForm from "./SearchForm";
import userEvent from "@testing-library/user-event";

describe("SearchForm", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );
  });

  it("should render a SearchForm component", () => {
    const searchTitle = screen.getByRole("heading", {
      name: /search for a game!/i,
    });
    expect(searchTitle).toBeInTheDocument();
  });

  it("should have an input search field", () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  })

  it("should have sliders in the search form", () => {
    const slider1 = screen.getByTestId("numPlayer-slider");
    const slider2 = screen.getByTestId("playtime-slider");
    const slider3 = screen.getByTestId("price-slider");
    expect(slider1).toBeInTheDocument();
    expect(slider2).toBeInTheDocument();
    expect(slider3).toBeInTheDocument();
  });

  it("should have a submit button", () => {
    const searchButton = screen.getByText("Submit");
    expect(searchButton).toBeInTheDocument();
  });

  it("should be able to type into input field", () => {
    const input = screen.getByPlaceholderText("Search by name")
    userEvent.type(input, "Catan")

    const inputElement = document.getElementById('search-input') as HTMLInputElement
    expect(inputElement.value).toBe("Catan")
  })
});

