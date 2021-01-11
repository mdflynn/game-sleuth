import { screen, render } from '@testing-library/react'
import GamePreview from './GamePreview'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

describe("GamePreview", () => {

  it("should render an game title", async () => {
    render(
      <MemoryRouter>
        <GamePreview 
        id="j8LdPFmePE"
        key="j8LdPFmePE"
        name="7 Wonders Duel"
        min_players= {2}
        max_players= {2}
        image_url="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg"
        rank= {25}
        />
      </MemoryRouter>
    );

    const gameTitle = screen.getByText("7 Wonders Duel");
    
    expect(gameTitle).toBeInTheDocument();
  });

  it("should render an game image", async () => {
    render(
      <MemoryRouter>
        <GamePreview 
        id="j8LdPFmePE"
        key="j8LdPFmePE"
        name="7 Wonders Duel"
        min_players= {2}
        max_players= {2}
        image_url="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg"
        rank= {25}
        />
      </MemoryRouter>
    );

    const gameImage = screen.getByAltText("7 Wonders Duel");
    
    expect(gameImage).toBeInTheDocument();
  });

  it("should render an game rank", async () => {
    render(
      <MemoryRouter>
        <GamePreview 
        id="j8LdPFmePE"
        key="j8LdPFmePE"
        name="7 Wonders Duel"
        min_players= {2}
        max_players= {2}
        image_url="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg"
        rank= {25}
        />
      </MemoryRouter>
    );

    const gameRank = screen.getByText("Sleuth Ranking: 25");
    
    expect(gameRank).toBeInTheDocument();
  });

  it("should render an game amount of players", async () => {
    render(
      <MemoryRouter>
        <GamePreview 
        id="j8LdPFmePE"
        key="j8LdPFmePE"
        name="7 Wonders Duel"
        min_players= {2}
        max_players= {2}
        image_url="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255812092-51S3zQnsPBL.jpg"
        rank= {25}
        />
      </MemoryRouter>
    );

    const gamePlayers = screen.getByText("2-2 Players");
    
    expect(gamePlayers).toBeInTheDocument();
  });

})