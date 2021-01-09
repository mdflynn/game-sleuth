import React from "react";
import {
  fireEvent,
  render,
  screen,
  RenderResult
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Slider } from "@material-ui/core";

import SearchForm from "./SearchForm";

let documentBody: RenderResult;

describe("SearchForm", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );
  });

  it("should render a SearchForm component", () => {
    const searchTitle = screen.getByText("Search for Games!");
    expect(searchTitle).toBeInTheDocument();
  });

  it("should have sliders in the search form", () => {
    const slider1 = screen.getByTestId("numPlayer-slider");
    const slider2 = screen.getByTestId("playtime-slider");
    const slider3 = screen.getByTestId("price-slider");
    expect(slider1).toBeInTheDocument();
    expect(slider2).toBeInTheDocument();
    expect(slider3).toBeInTheDocument();
  });

  it("should have a search button", () => {
    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();
  });

  it("should have a hom button", () => {
    const homeButton = screen.getByText("Return Home");
    expect(homeButton).toBeInTheDocument();
  });
});

describe("SearchForm interaction", () => {
  it("should change value if slider is moved", () => {
    documentBody = render(
      <Slider
        className="slider"
        min={1}
        max={8}
        value={[3, 5]}
        onChange={jest.fn()}
        valueLabelDisplay="auto"
        aria-label="range-slider"
        data-testid="numPlayer-slider"
      />
    );
    // const slider = documentBody.findByTestId("numPlayer-slider");
    const test = [4, 6];
    fireEvent(documentBody.getByTestId("numPlayer-slider"), 
        new DragEvent('ondrag')
      )
    // const setup = () => {
    //   const utils = render(
    //     <Slider
    //       className="slider"
    //       min={1}
    //       max={8}
    //       value={[3, 5]}
    //       onChange={jest.fn()}
    //       valueLabelDisplay="auto"
    //       aria-label="range-slider"
    //       data-testid="numPlayer-slider"
    //     />
    //   );
    //   const input = utils.getByLabelText("range-slider");
    //   return {
    //     input,
    //     ...utils,
    //   };
    // };
    // const { input } = setup();
    // fireEvent.change(input, { 
    //     target: {value: test}
    // })
    // var inputValue = (<HTMLInputElement>screen.getElementById(elementId)).value
    // expect(input.value).toBe(test)
    // const slider = screen.getByTestId("numPlayer-slider");
    // console.log(slider);

    // expect(screen.getByDisplayValue(2)).toBeInTheDocument()
  });

  it("should render search results on submission", async () => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );
    //   expect(1233).toBeInTheDocument()
    // const searchButton = screen.getByText('Search');
    // userEvent.click(searchButton)
    // const test = await waitFor(() => screen.getByRole('heading', { name: /search results/i }))
    // expect(test).toBeInTheDocument()
  });
  it("should return to the main page on Return Home click", () => {
    //return home
  });
});
