import React, { useState, useEffect } from 'react';
import './SearchDisplay.scss';
import { MyBoardGame, PreviewInfo } from '../interfaces/MyBoardGame.interface';
import { fetchSearchResults } from '../APIcalls';
import GamePreview from '../GamePreview/GamePreview';
import { useParams } from 'react-router-dom';
import magHand from '../assets/mag-hand.png';

const SearchDisplay = () => {
  const [allGames, setAllGames] = useState([]);
  const [noResults, setNoResults] = useState<boolean>(false);
  let { criteria }: any = useParams();

  useEffect(() => {
    let searchCriteria = handleSearchCriteria();

    fetchSearchResults(searchCriteria)
      .then((data) => {
        if (data.games.length > 0) {
          setAllGames(cleanData(data.games) as any);
        } else {
          setNoResults(true);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearchCriteria = () => {
    switch (criteria) {
      case 'trending':
        return 'order_by=reddit_week_count&limit=10';
      case 'top-10':
        return 'order_by=rank&limit=10';
      case 'max_players=2':
        return 'max_players=2';
      case 'max_players=4':
        return 'max_players=4';
      default:
        return criteria;
    }
  };

  const cleanData = (data: MyBoardGame[]) => {
    if (!data) return;
    let cleanedData = data.map((game: MyBoardGame) => {
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
        average_user_rating: game.average_user_rating,
        num_user_ratings: game.num_user_ratings,
        rank: game.rank,
        trending_rank: game.trending_rank,
        rules_url: game.rules_url,
      };
    });
    return cleanedData;
  };

  const createGamePreview = (game: PreviewInfo) => {
    return (
      <GamePreview
        id={game.id}
        key={game.id}
        name={game.name}
        image_url={game.image_url}
        rank={game.rank}
        min_players={game.min_players}
        max_players={game.max_players}
      />
    );
  };

  const handleLoadingScreen = () => {
    return noResults ? (
      <h3 className="status-font">
        No search results
        <br />
        Try again!
      </h3>
    ) : (
      <section>
        <h3 className="status-font">...Sleuthing Games...</h3>
        <img className="mag-hand-search" alt="Magnifier Hand" src={magHand} />
      </section>
    );
  };

  return (
    <section className="displayed-games-section">
      {allGames.length === 0 && handleLoadingScreen()}
      {allGames.length > 0 && (
        <section>
          <h2 className="search-title">
            Search Results{' '}
            <span className="matches-num">({allGames.length} matches)</span>
          </h2>

          <div className="search-results">
            {allGames.map((game: MyBoardGame) => createGamePreview(game))}
          </div>
          <img className="mag-hand-static" alt="Magnifier Hand" src={magHand} />
        </section>
      )}
    </section>
  );
};

export default SearchDisplay;
