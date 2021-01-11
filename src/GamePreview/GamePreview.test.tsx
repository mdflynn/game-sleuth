import { screen, render } from '@testing-library/react'
import GamePreview from './GamePreview'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { fetchSearchResults } from '../APIcalls'
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
    {
      id: "h8LdAFmeP0",
      name: "Patchwork",
      min_players: 2,
      max_players: 2,
      min_age: 4,
      image_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg",
      price: "30.97",
    }
  ],
};

describe("GamePreview", () => {
  it.skip("should render an Game Title", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <GamePreview />
      </MemoryRouter>
    );

    const gameImage = screen.getByAltText("7 Wonders Duel");
    
    expect(gameImage).toBeInTheDocument();
  });

  it("should render an game rank", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <GamePreview />
      </MemoryRouter>
    );

    const gameRank = screen.getByText("Sleuth Ranking:");
    
    expect(gameRank).toBeInTheDocument();
  });

  it.skip("should render an game amount of players", async () => {
    const mockedFetchCall = fetchSearchResults as jest.Mock<any>;
    mockedFetchCall.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <GamePreview />
      </MemoryRouter>
    );

    const gamePlayers = screen.getByText(" - Players");
    
    expect(gamePlayers).toBeInTheDocument();
  });

})