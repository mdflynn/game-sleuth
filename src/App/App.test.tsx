import React from "react";
import App from "./App";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { fetchSearchResults, fetchSoloGameDetails } from "../APIcalls";
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

const soloGameDetails = {
  games: [
    {
      id: 'j8LdPFmePE',
      key: 'yqR4PtpO8X',
      name: '7 Wonders Duel',
      min_players: 1,
      max_players: 5,
      image_url:
        'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-513-lrmjs2L.jpg',
      rank: 2,
      min_age: 14,
      description: '7 Wonders Duel is great',
      price: 68,
      url: 'https://www.boardgameatlas.com/game/yqR4PtpO8X/scythe',
      primary_publisher: { name: 'Stonemaier Games' },
      mechanics: { id: 'Bc7R8pLoGk' },
      average_user_rating: 4,
      num_user_ratings: 234,
      trending_rank: 3,
      rules_url: 'https://app.box.com/s/rj3jrw0rab2uiz02up89kbant5g8ew1p',
    },
  ],
};

const soloSubDetails = {
  mechanics: [{ id: 'Bc7R8pLoGk', name: 'Worker Placement' }],
};

describe("App & MainPage Interactions", () => {
  it("should render correctly", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Sleuth for Games")).toBeInTheDocument;
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

    const header = await waitFor(() => screen.getByText("Search for a game!"));
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
    mockedFetchCall.mockResolvedValue(soloGameDetails);
    const mockedDetailsCall = fetchSoloGameDetails as jest.Mock<any>;
    mockedDetailsCall.mockResolvedValue(soloSubDetails);
    const history = createMemoryHistory();
    history.push("/game/j8LdPFmePE");
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    const soloMovieTitle = await waitFor(
      () => screen.getByText("7 Wonders Duel")
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

    const searchForm = screen.getByText("Sleuth for Games");

    userEvent.click(searchForm);

    const searchButton = screen.getByText("Submit");

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

    const topTenGames = screen.getByText("The Top 100");

    userEvent.click(topTenGames);

    const title = await waitFor(() => screen.getByText("7 Wonders Duel"));

    expect(title).toBeInTheDocument();
  });

  it("should be able to click a link then a solo game", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(soloGameDetails);
    const mockedDetailsCall = fetchSoloGameDetails as jest.Mock<any>;
    mockedDetailsCall.mockResolvedValue(soloSubDetails);
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

    const testId = await waitFor(() => screen.getByTestId('solo-view-test'))

    expect(testId).toBeInTheDocument();
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

  it("should be able to return home on click", async () => {
    const history = createMemoryHistory();
    history.push("/some/bad/route");
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    const homeButton = await waitFor(() => screen.getByText("Return Home"));

    userEvent.click(homeButton);

    expect(homeButton).not.toBeInTheDocument();
    expect(screen.getByText("Sleuth for Games")).toBeInTheDocument()
  })
});

