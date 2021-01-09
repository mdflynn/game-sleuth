import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { fetchSearchResults } from "../APIcalls";
import { exception } from "console";
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
    {
      id: "9iBOPn3lES",
      name: "Patchwork",
      min_players: 2,
      max_players: 2,
      min_age: 8,
      image_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg",
      price: "38.97",
    },
  ],
};

describe("App & MainPage Interactions", () => {
  it("should render correctly", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Search Form")).toBeInTheDocument;
    expect(screen.getByText("Trending Games")).toBeInTheDocument;
  });

  it("should handle an incorrect path", () => {
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

  it.skip("should handle path to a certian game", async () => {
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

// INTEGRATION TESTS

describe("SearchForm interaction", () => {
  it("should render search results on submission", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const searchForm = screen.getByText("Search Form");

    userEvent.click(searchForm);

    const searchButton = screen.getByText("Search");

    userEvent.click(searchButton);

    const heading = await waitFor(() =>
      screen.getByRole("heading", { name: /search results/i })
    );

    expect(heading).toBeInTheDocument();
  });
});

describe("SearchDisplay & SoloDisplay interaction", () => {
  it("should be able to click a link", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const twoPlayerGames = screen.getByText("2 Player Games");

    userEvent.click(twoPlayerGames);

    const title = await waitFor(() => screen.getByText("7 Wonders Duel"));

    expect(title).toBeInTheDocument();
  });

  it("should be able to click into a different link", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const topTenGames = screen.getByText("Top 10 Games");

    userEvent.click(topTenGames);

    const title = await waitFor(() => screen.getByText("7 Wonders Duel"));

    expect(title).toBeInTheDocument();
  });

  it.skip("should be able to click a link then a solo game", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const trendingGames = screen.getByText("Trending Games");

    userEvent.click(trendingGames);

    const title = await waitFor(() => screen.getByText("7 Wonders Duel"));

    expect(title).toBeInTheDocument();

    userEvent.click(title);

    expect(screen.getByText("Individual View")).toBeInTheDocument();
    // Change this from Indiv View to Game Title or Published by or something being rendered
  });

  it.skip("should be able to click a link then a different solo game", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const trendingGames = screen.getByText("Trending Games");

    userEvent.click(trendingGames);

    const title = await waitFor(() => screen.getByText("Patchwork"));

    expect(title).toBeInTheDocument();

    userEvent.click(title);

    expect(screen.getByText("Individual View")).toBeInTheDocument();
    // Change this from Indiv View to Game Title or Published by or something being rendered
  });
});

describe("Incorrect Path interaction", () => {
  it("should render a return home button", async () => {
    const history = createMemoryHistory();
    history.push("/some/bad/route");
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    const homeButton = await waitFor(() => screen.getByText("Return Home"));

    expect(homeButton).toBeInTheDocument();
  });

  it("should be able to click return home", async () => {
    const history = createMemoryHistory();
    history.push("/some/bad/route");
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    const homeButton = await waitFor(() => screen.getByText("Return Home"));

    userEvent.click(homeButton);

    expect(homeButton).not.toBeInTheDocument();
  });
});

