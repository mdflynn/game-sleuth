import './SoloGameView.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../APIcalls';
import { MyBoardGame } from '../interfaces/MyBoardGame.interface';

interface MechanicsType {
  mechanics: [];
}

interface Details {
  id: string;
  name: string;
  url: string;
}

export const SoloGameView = () => {
  const [soloGame, setSoloGame] = useState<MyBoardGame | null>(null);
  const [soloMechanics, setSoloMechanics] = useState<MechanicsType>({
    mechanics: [],
  });
  const [soloCategories, setSoloCategories] = useState<object>([]);
  const [error, setError] = useState<object | null>(null);
  const location: { id: string } = useParams();

  // useEffect functions cannot be broken out into individual functions
  // or will cause continual call of useEffect

  useEffect(() => {
    if (soloGame) return;

    API.fetchSearchResults(`ids=${location.id}`)
      .then((data) => {
        setSoloGame(data.games[0]);
      })
      .catch((error) => {
        setError(error);
      });

    let subDetails = ['categories', 'mechanics'];
    subDetails.forEach((detail) => {
      API.fetchSoloGameDetails(detail)
        .then((data) => {
          switch (detail) {
            case 'categories':
              setSoloCategories(data);
              break;
            case 'mechanics':
              setSoloMechanics(data);
              break;
          }
        })
        .catch((error) => {
          setError(error);
        });
    });
  }, [location, soloGame]);

  if (!soloGame) {
    return <h3 className="loading-text">...Sleuthing Details...</h3>;
  } else {
    return (
      <section>
        {error && <h1>Unexpected Error Occured: {error}</h1>}
        <div className="solo-game-overview">
          <div className="solo-image-wrapper">
            <img
              className="solo-game-image"
              src={soloGame.image_url}
              alt={soloGame.name}
            />
          </div>
          <div className="solo-game-details">
            <h2 className="solo-game-title">{soloGame.name}</h2>
            <h3>
              {soloGame.min_players}-{soloGame.max_players} Players
            </h3>
            <p>Published by {soloGame.primary_publisher.name}</p>
            <p>Sleuth Rank: {soloGame.rank} </p>
            <p>
              {soloGame.average_user_rating.toFixed(1)} / 5 (
              {soloGame.num_user_ratings} ratings)
            </p>
            {soloGame.trending_rank !== 0 && (
              <p>Currently Trending at #{soloGame.trending_rank}</p>
            )}
            <p>Recommended Age: {soloGame.min_age}+</p>
            <p>MSRP: ${soloGame.price}</p>
          </div>
        </div>
        {soloMechanics && (
          <div className="solo-mechanics">
            {/* {soloGame.mechanics.map(
              (mechanic) =>
                soloMechanics.mechanics.find(
                  (listMech: { id: string }) => listMech.id === mechanic.id
                ).name
            )} */}
          </div>
        )}
        <div
          className="solo-game-description"
          dangerouslySetInnerHTML={{ __html: soloGame.description }}
        />
        <a href={soloGame.url}>See more at Board Game Atlas</a>
      </section>
    );
  }
};
