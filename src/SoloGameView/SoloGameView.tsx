import './SoloGameView.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchResults } from '../APIcalls';

export const SoloGameView = () => {
  const [soloGame, setSoloGame] = useState([]);
  const location: { id: string } = useParams();

  useEffect(() => {
    if (soloGame.length > 0) return;
    fetchSearchResults(`ids=${location.id}`).then((data) => {
      setSoloGame(data.games);
    });
  }, [location, soloGame]);

  // TODO: Memory Leak on Display of Solo View

  return <h2>Individual View</h2>;
};
