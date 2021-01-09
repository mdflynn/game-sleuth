import React from "react";
import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import SearchDisplay from '../SearchDisplay/SearchDisplay'
import { fetchSearchResults } from "../APIcalls";
import { act } from "react-dom/test-utils";
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


describe('SearchDisplay', () => {

  it("should render correctly", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);  
    render(
      <MemoryRouter>
        <SearchDisplay />
      </MemoryRouter>
    )
    const header = await waitFor(() => screen.getByText("Search Results"))
    expect(header).toBeInTheDocument()
  })

  it("should render correctly", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);  
    render(
      <MemoryRouter>
        <SearchDisplay />
      </MemoryRouter>
    )
    const gameTitle = await waitFor(() => screen.getByText("7 Wonders Duel"))
    expect(gameTitle).toBeInTheDocument()
  })
  
  it("should render correctly", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);  
    render(
      <MemoryRouter>
        <SearchDisplay />
      </MemoryRouter>
    )
    const gameTitle = await waitFor(() => screen.getByAltText("7 Wonders Duel"))
    act(() => {
      fireEvent.click(gameTitle)
      const individualView = screen.getByText("Individual View")
      expect(individualView).toBeInTheDocument()
    })
  })
})