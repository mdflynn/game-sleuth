import './SoloGameView.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../APIcalls';
import { MyBoardGame } from '../interfaces/MyBoardGame.interface';

export const SoloGameView = () => {
  const [soloGame, setSoloGame] = useState<MyBoardGame | null>(null);
  const [soloMechanics, setSoloMechanics] = useState<any>({});
  const [soloCategories, setSoloCategories] = useState<any>({});
  const [error, setError] = useState<object | null>(null);
  const location: { id: string } = useParams();

  //TODO: Change soloMechanics and soloCatagories to use valid types

  useEffect(() => {
    if (soloGame) return;
    let mounted = true;

    API.fetchSearchResults(`ids=${location.id}`)
      .then((data) => {
        if (mounted) {
          setSoloGame(data.games[0]);
        }
      })
      .catch((error) => {
        if (mounted) {
          setError(error);
        }
      });

    let subDetails = ['categories', 'mechanics'];
    subDetails.forEach((detail) => {
      API.fetchSoloGameDetails(detail)
        .then((data) => {
          if (mounted) {
            switch (detail) {
              case 'categories':
                setSoloCategories(data);
                break;
              case 'mechanics':
                setSoloMechanics(data);
                break;
            }
          }
        })
        .catch((error) => {
          if (mounted) {
            setError(error);
          }
        });
    });

    return function cleanup() {
      mounted = false;
    };
  }, [location, soloGame]);

  // TODO: Reformat match id functions into one

  const matchMechanicFromId = (mechanic: { id: string }) => {
    return soloMechanics.mechanics.find(
      (listMech: { id: string }) => listMech.id === mechanic.id
    ).name;
  };

  const matchCategoryFromId = (category: { id: string }) => {
    return soloCategories.categories.find(
      (listCat: { id: string }) => listCat.id === category.id
    ).name;
  };

  if (!soloGame) {
    return <h3 className="loading-text">...Sleuthing Details...</h3>;
  } else {
    return (
      <section className="solo-view-wrapper" data-testid="solo-view-test">
        <div className="view-backdrop">
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
          <div className="solo-sub-details">
            {soloMechanics.mechanics && (
              <div>
                <i>
                  <b>Mechanics: </b>
                </i>
                {soloGame.mechanics
                  .map((mechanic) => matchMechanicFromId(mechanic))
                  .join(', ')}
              </div>
            )}
            <br></br>
            {soloCategories.categories && (
              <div>
                <i>
                  <b>Categories: </b>
                </i>
                {soloGame.categories
                  .map((category) => matchCategoryFromId(category))
                  .join(', ')}
              </div>
            )}
          </div>
          <div className="solo-description-wrapper">
            <div className="solo-desc-background">
              <h3 className="solo-game-description">
                {soloGame.name} at a glance:
              </h3>
              <div
                className="solo-game-description"
                dangerouslySetInnerHTML={{ __html: soloGame.description }}
              />
            </div>
            <div className="links-section">
              <h4 className="info-link">Sleuth Links: </h4>
              <a className="info-link" href={soloGame.url}>
                See more at Board Game Atlas
              </a>
              <a className="info-link" href={soloGame.rules_url}>
                Show Me The Rules
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
