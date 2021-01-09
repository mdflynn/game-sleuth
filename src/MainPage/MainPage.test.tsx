import { screen, render } from '@testing-library/react'
import MainPage from './MainPage'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
jest.mock('../APIcalls')

describe("MainPage", () => {
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