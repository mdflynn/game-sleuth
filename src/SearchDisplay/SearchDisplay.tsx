import React, { useState, useEffect } from 'react';
import './SearchDisplay.scss';
import { MyBoardGame, PreviewInfo } from '../interfaces/MyBoardGame.interface';
import { fetchSearchResults } from '../APIcalls';
import GamePreview from '../GamePreview/GamePreview';

interface MyProps {
  searchCriteria: string;
}

// interface AllGames {
//   boardGames: MyBoardGame[];
// }

const SearchDisplay = (props: MyProps) => {
  const [AllGames, setAllGames] = useState([]);

  // state: AllGames = {
  //   boardGames: [],
  // };

  useEffect(() => {
    let searchCriteria = handleSearchCriteria();
    fetchSearchResults(searchCriteria).then((data) => {
      const cleanedData: MyBoardGame[] = cleanData(data.games);
      setAllGames(cleanedData as any);
    });
  });

  // useEffect(() => {
  //   let searchCriteria = handleSearchCriteria();
  //   fetchSearchResults(searchCriteria).then((data) => {
  //     setState({ boardGames: cleanData(data.games) });
  //   });
  // });

  const handleSearchCriteria = () => {
    switch (props.searchCriteria) {
      case 'trending':
        return 'order_by=reddit_week_count&limit=10';
      case 'top-10':
        return 'order_by=rank&limit=10';
      case 'max_players=2':
      case 'max_players=4':
        return props.searchCriteria;
    }
  };

  const cleanData = (data: object[]) => {
    let cleanData = data.map((game: any) => {
      return {
        id: game.id,
        name: game.name,
        min_players: game.min_players,
        max_players: game.max_players,
        min_age: game.min_age,
        image_url: game.image_url,
        description: game.description,
        price: game.price,
        url: game.url,
        primary_publisher: game.primary_publisher,
        mechanics: game.mechanics,
        // more processing with ^
        average_user_rating: game.average_user_rating,
        num_user_ratings: game.num_user_ratings,
        rank: game.rank,
        trending_rank: game.trending_rank,
        rules_url: game.rules_url,
      };
    });
    return cleanData;
  };

  const createGamePreview = (game: PreviewInfo) => {
    return (
      <GamePreview
        id={game.id}
        name={game.name}
        image_url={game.image_url}
        rank={game.rank}
        min_players={game.min_players}
        max_players={game.max_players}
      />
    );
  };

  return (
    <section className="displayed-games-section">
      <h1>Search Results</h1>
      <div className="search-results">
        {AllGames.map((game: MyBoardGame) => createGamePreview(game))}
      </div>
    </section>
  );
};

export default SearchDisplay;
