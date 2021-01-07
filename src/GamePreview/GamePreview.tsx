import './GamePreview.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { PreviewInfo } from '../interfaces/MyBoardGame.interface';

const GamePreview = (props: PreviewInfo) => {
  return (
    <Link to={`/game/${props.id}`}>
      <section className="game-preview">
        <img className="preview-image" src={props.image_url} alt={props.name} />
        <div className="preview-info">
          <h3 className="game-title">{props.name}</h3>
        </div>
      </section>
    </Link>
  );
};

export default GamePreview;
