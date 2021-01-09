import { screen, render, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MainPage from './MainPage'
import '@testing-library/jest-dom'
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history'
jest.mock('../APIcalls')

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
        <MainPage />
      </MemoryRouter>
    );
    const searchForm = screen.getByText("Search Form");
    const fourPlayerGames = screen.getByText("4 Player Games")
    expect(searchForm).toBeInTheDocument();
    expect(fourPlayerGames).toBeInTheDocument();
  });

  it("should be able to click search form link", async ()  => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    const searchForm =  await waitFor(() => screen.getByText("Search Form"))

    fireEvent.click(searchForm)

    // screen.debug()

    const searchFormHeader = await waitFor(() => screen.queryByText("Search for Games!"))

    expect(searchFormHeader).toBeInTheDocument()

  })


})