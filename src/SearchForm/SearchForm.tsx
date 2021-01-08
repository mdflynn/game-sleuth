import React, { useState } from "react";
import "./SearchForm.scss";
import { Slider, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const SearchForm: React.FC = () => {
  const [numPlayers, setNumPlayers] = useState([4, 6]);
  const [playtime, setPlaytime] = useState([15, 45]);
  const [price, setPrice] = useState([15, 30]);
  const [redirector, setRedirector] = useState(false);
  const [searchString, setSearchString] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const playerSearch = `gt_min_players=${numPlayers[0]}&lt_max_players=${numPlayers[1]}`;
    const playtimeSearch = `&gt_min_playtime=${playtime[0]}&lt_max_playtime=${playtime[1]}`;
    const priceSearch = `&lt_price=${price[0]}&gt_price${price[1]}`;
    const search = playerSearch + playtimeSearch + priceSearch;
    setSearchString(search);
    setRedirector(true);
  };

  const handlePlayersChange = (event: any, newValue: any) => {
    setNumPlayers(newValue);
  };
  const handlePlaytimeChange = (event: any, newValue: any) => {
    setPlaytime(newValue);
  };
  const handlePriceChange = (event: any, newValue: any) => {
    setPrice(newValue);
  };
  if (redirector) {
    return <Redirect to={`/${searchString}`} />;
  }

  return (
    <form>
      <button className="home-button">Return Home</button>
      <h1>Search for Games!</h1>
      <div className="slidecontainer">
        <Typography id="range-slider" gutterBottom>
          Number of Players
        </Typography>
        <Slider
          className="slider"
          min={1}
          max={8}
          name={"test"}
          value={numPlayers}
          onChange={handlePlayersChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </div>
      <div className="slidecontainer">
        <Typography id="range-slider" gutterBottom>
          Playtime
        </Typography>
        <Slider
          className="slider"
          min={0}
          max={240}
          value={playtime}
          onChange={handlePlaytimeChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </div>
      <div className="slidecontainer">
        <Typography id="range-slider" gutterBottom>
          Price
        </Typography>
        <Slider
          className="slider"
          min={5}
          max={100}
          value={price}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </div>
      <button onClick={handleSubmit}>Search</button>
    </form>
  );
};

export default SearchForm;
