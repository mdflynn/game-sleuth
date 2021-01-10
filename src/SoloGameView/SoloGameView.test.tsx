import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { SoloGameView } from '../SoloGameView/SoloGameView';
import { fetchSearchResults, fetchSoloGameDetails } from '../APIcalls';
jest.mock('../APIcalls');

const soloGameDetails = {
  games: [
    {
      id: 'yqR4PtpO8X',
      key: 'yqR4PtpO8X',
      name: 'Scythe',
      min_players: 1,
      max_players: 5,
      image_url:
        'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254971843-513-lrmjs2L.jpg',
      rank: 2,
      min_age: 14,
      description: 'Scythe is great',
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

beforeEach(() => {
  const mockedResultsCall = fetchSearchResults as jest.Mock<any>;
  mockedResultsCall.mockResolvedValue(soloGameDetails);
  const mockedDetailsCall = fetchSoloGameDetails as jest.Mock<any>;
  mockedDetailsCall.mockResolvedValue(soloSubDetails);
});

describe('SoloView', () => {
  it('should render correctly', async () => {
    render(
      <MemoryRouter>
        <SoloGameView />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('solo-view-test')).toBeInTheDocument();
    });
  });

  it('should display relevant information from fetch', async () => {
    render(
      <MemoryRouter>
        <SoloGameView />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Scythe')).toBeInTheDocument();
      expect(screen.getByText('Scythe is great')).toBeInTheDocument();
      expect(screen.getByText('1-5 Players')).toBeInTheDocument();
      expect(screen.getByText('Scythe is great')).toBeInTheDocument();
      expect(
        screen.getByText('Published by Stonemaier Games')
      ).toBeInTheDocument();
    });
  });
});
