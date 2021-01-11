import React from 'react';
import './MainPage.scss';
import { Link } from 'react-router-dom';
import magHand from '../assets/mag-hand.png';

const MainPage: React.FC = () => {
  return (
    <main className="container">
      <ul className="list-wrapper">
        <Link className="remove-link" to="/form">
          <li className="search-form">
            <h3 className="title">Search All Games</h3>
          </li>
        </Link>

        <Link className="remove-link" to="/trending">
          <li className="search-trending" data-value="trending">
            <h3 className="title">Trending Games</h3>
          </li>
        </Link>

        <Link className="remove-link" to="/top">
          <li className="search-top" data-value="top-10">
            <h3 className="title">Top 10 Games</h3>
          </li>
        </Link>

        <Link className="remove-link" to="/max_player=2">
          <li className="search-two-player" data-value="max_players=2">
            <h3 className="title">2 Player Games</h3>
          </li>
        </Link>

        <Link className="remove-link" to="/max_players=4">
          <li className="search-four-player" data-value="max_player=4">
            <h3 className="title">4 Player Games</h3>
          </li>
        </Link>
      </ul>
      <img className="mag-hand-home" alt="Magnifier Hand" src={magHand} />
    </main>
  );
};

export default MainPage;
