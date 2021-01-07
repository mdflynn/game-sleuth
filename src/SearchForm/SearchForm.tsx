import React, { useState } from "react";
import "./SearchForm.scss";
import { Slider, Typography } from "@material-ui/core";


const SearchForm:React.FC = () => {
  const [numPlayers, setNumPlayers] = useState([4, 6]);
  const [playtime, setPlaytime] = useState([15, 45]);
  const [price, setPrice] = useState([15, 30]);
  const [minAge, setMinAge] = useState(14);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //fetch data here and pass down method to update searchCriteria in App
    //which should render SearchDisplay
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
  const handleAgeChange = (event: any, newValue: any) => {
    setMinAge(newValue);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="slidecontainer">
        <Typography id="range-slider" gutterBottom>
          Minimum Age
        </Typography>
        <Slider
          className="slider"
          min={8}
          max={18}
          value={minAge}
          onChange={handleAgeChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </div>
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
