import React from "react";
import "./MainPage.scss";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <ul>
      <Link className="remove-link" to="/form">
        <li className="search-form">
          <h1>Search Form</h1>
        </li>
      </Link>

      <Link className="remove-link" to="/trending">
        <li className="search-trending" data-value="trending">
          Trending Games
        </li>
      </Link>

      <Link className="remove-link" to="/top">
        <li className="search-top" data-value="top-10">
          Top 10 Games
        </li>
      </Link>

      <Link className="remove-link" to="/max_player=2">
        <li className="search-two-player" data-value="max_players=2">
          2 Player Games
        </li>
      </Link>

      <Link className="remove-link" to="/max_players=4">
        <li className="search-four-player" data-value="max_player=4">
          4 Player Games
        </li>
      </Link>
    </ul>
  );
};


export default MainPage;
