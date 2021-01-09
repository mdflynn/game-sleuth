import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { fetchSearchResults } from "../APIcalls";
jest.mock("../APIcalls");

const expectedReturn = {
  games: [
    {
      id: "j8LdPFmePE",
      name: "7 Wonders Duel",
      min_players: 2,
      max_players: 2,
      min_age: 10,
      image_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg",
      price: "24.97",
    },
  ],
};

describe("App", () => {
  it("should render correctly", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect("Search Form").toBeInTheDocument;
    // something that should be rendered
  });

  it.skip("should handle an incorrect path", () => {
    const history = createMemoryHistory();
    history.push("/some/bad/route");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const errMessage = screen.getByText("This page does not exist");
    expect(errMessage).toBeInTheDocument();
  });

  it("should handle path to main page", async () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const trendingLink = await waitFor(() =>
      screen.getByText("Trending Games")
    );
    expect(trendingLink).toBeInTheDocument();
  });

  it("should handle path to search form", async () => {
    const history = createMemoryHistory();
    history.push("/form");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const header = await waitFor(() => screen.getByText("Search for Games!"));
    expect(header).toBeInTheDocument();
  });

  it("should handle path to certian criteria", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    const history = createMemoryHistory();
    history.push("/max_players=2");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const movieTitle = await waitFor(() => screen.getByText("7 Wonders Duel"));
    expect(movieTitle).toBeInTheDocument();
  });

  it("should handle path to a certian game", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    const history = createMemoryHistory();
    history.push("/game/j8LdPFmePE");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const soloMovieTitle = await waitFor(
      () => screen.getByText("Individual View")
      // change this when we design to "7 Wonders Deul" bc right now only "Individual Movie"
      // is the only thing rendered on that path
    );
    expect(soloMovieTitle).toBeInTheDocument();
  });
});
