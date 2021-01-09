import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import SearchDisplay from "../SearchDisplay/SearchDisplay";
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

describe("SearchDisplay", () => {
  it("should render correctly", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <SearchDisplay />
      </MemoryRouter>
    );
    const header = await waitFor(() => screen.getByText("Search Results"));
    expect(header).toBeInTheDocument();
  });

  it("should render correctly", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <SearchDisplay />
      </MemoryRouter>
    );
    const gameTitle = await waitFor(() => screen.getByText("7 Wonders Duel"));
    expect(gameTitle).toBeInTheDocument();
  });

  it("should be able to click on game & be redirected to solo view", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <SearchDisplay />
      </MemoryRouter>
    );
      // MOCK FUNCTION CALLED THE SOLO GAME PREVIEW
    
    
    
  });
});
