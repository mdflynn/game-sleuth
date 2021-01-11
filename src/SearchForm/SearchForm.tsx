import React, { useState } from 'react';
import './SearchForm.scss';
import { Slider, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const SearchForm: React.FC = () => {
  const [numPlayers, setNumPlayers] = useState<number[]>([4, 6]);
  const [playtime, setPlaytime] = useState<number[]>([15, 45]);
  const [price, setPrice] = useState<number[]>([15, 30]);
  const [searchName, setSearchName] = useState<string>('');
  const [redirector, setRedirector] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const playerSearch = `gt_min_players=${numPlayers[0] - 1}&lt_max_players=${
      numPlayers[1] + 1
    }`;
    const playtimeSearch = `&gt_min_playtime=${playtime[0]}&lt_max_playtime=${playtime[1]}`;
    const priceSearch = `&lt_price=${price[0]}&gt_price${price[1]}`;
    const search = !searchName
      ? playerSearch + playtimeSearch + priceSearch
      : `name=${searchName}`;
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

  const handleSearchByName = (event: any) => {
    setSearchName(event.target.value);
  };

  if (redirector) {
    return <Redirect to={`/${searchString}`} />;
  }

  return (
    <div className="search-box">
      <h2>Search for a game!</h2>
      <form>
        <div className="user-box">
          <input
            id="search-input"
            type="text"
            name="searchName"
            value={searchName}
            onChange={handleSearchByName}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSubmit(event);
              }
            }}
            placeholder="Search by name"
          />
          <h2>Search for range of games</h2>
        </div>
        <div className="user-box">
          <Typography component={'span'} id="range-slider" gutterBottom>
            <h3 className="search-criteria-font">Number of Players</h3>
          </Typography>
          <div className="values-display">
            <span className="value">{numPlayers[0]}</span>
            <span className="value">{numPlayers[1]}</span>
          </div>
          <Slider
            className="slider"
            min={1}
            max={8}
            value={numPlayers}
            onChange={handlePlayersChange}
            valueLabelDisplay="auto"
            getAriaLabel={() => 'aria-slider'}
            data-testid="numPlayer-slider"
          />
        </div>
        <div className="user-box">
          <Typography component={'span'} id="range-slider" gutterBottom>
            <h3 className="search-criteria-font">Playtime (minutes)</h3>
          </Typography>
          <div className="values-display">
            <span className="value">{playtime[0]}</span>
            <span className="value">{playtime[1]}</span>
          </div>
          <Slider
            className="slider"
            min={0}
            max={240}
            value={playtime}
            onChange={handlePlaytimeChange}
            valueLabelDisplay="auto"
            getAriaLabel={() => 'aria-slider'}
            data-testid="playtime-slider"
          />
        </div>
        <div className="user-box">
          <Typography component={'span'} id="range-slider" gutterBottom>
            <h3 className="search-criteria-font">Price</h3>
          </Typography>
          <div className="values-display">
            <span className="value">{'$ ' + price[0]}</span>
            <span className="value">{'$ ' + price[1]}</span>
          </div>
          <Slider
            className="slider"
            min={5}
            max={100}
            value={price}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            getAriaLabel={() => 'aria-slider'}
            data-testid="price-slider"
          />
        </div>
        <a href="#" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};

export default SearchForm;
