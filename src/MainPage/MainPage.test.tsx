import { screen, render, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MainPage from './MainPage'
import '@testing-library/jest-dom'
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history'
jest.mock('../APIcalls')

// const expectedReturn = {
//   games: [
//     {
//       id: "j8LdPFmePE",
//       name: "7 Wonders Duel",
//       min_players: 2,
//       max_players: 2,
//       min_age: 10,
//       image_url:
//         "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg",
//       price: "24.97",
//     },
//   ],
// };

describe("App", () => {
  it("should render search form link", async () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const searchForm = screen.getByText("Search Form");
    
    expect(searchForm).toBeInTheDocument();
    
  });

  it("should render search trending games link", async () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    
    const trendingGames = screen.getByText("Trending Games")
    
    expect(trendingGames).toBeInTheDocument();
  });

  it("should render search top 10 games link", async () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    
    const topTenGames = screen.getByText("Top 10 Games")
    
    expect(topTenGames).toBeInTheDocument();
  });

  it("should render search 4 player games link", async () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    
    const fourPlayerGames = screen.getByText("4 Player Games")
    
    expect(fourPlayerGames).toBeInTheDocument();
  });

  it("should render search 2 player games link", async () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    
    const twoPlayerGames = screen.getByText("2 Player Games")
    
    expect(twoPlayerGames).toBeInTheDocument();
  });

})