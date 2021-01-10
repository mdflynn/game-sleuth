import './GamePreview.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { PreviewInfo } from '../interfaces/MyBoardGame.interface';

const GamePreview = ({
  id,
  name,
  min_players,
  max_players,
  image_url,
  rank,
}: PreviewInfo) => {
  return (
    <Link to={`/game/${id}`}>
      <section className="game-preview">
        <img className="game-image" src={image_url} alt={name} />
        <div className="preview-info">
          <h3 className="game-title">{name}</h3>
          <p>
            {min_players}-{max_players} Players
          </p>
          <p>Sleuth Ranking: {rank}</p>
        </div>
      </section>
    </Link>
  );
};

export default GamePreview;
