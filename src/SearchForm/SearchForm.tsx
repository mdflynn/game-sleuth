import React, { Component } from "react";
import "./SearchForm.scss";

interface FormState {
  numPlayers: number;
  playtime: number;
  price: number;
  minAge: number;
}

class SearchForm extends Component<any, FormState> {
  state: FormState = {
    numPlayers: 4,
    playtime: 45,
    price: 15,
    minAge: 14,
  };

  handleChange = (event: any) => {
    console.log(event);
  };

  getSliderValue(event: any) {
    this.setState({ numPlayers: event.target.value });
  }

  render() {
    return (
      <form>
        <h1>Search for Games!</h1>
        <div className="slidecontainer">
          <label>
            <input
              id="width"
              type="range"
              value={this.state.numPlayers}
              min="2"
              max="8"
              onChange={(event: any) => this.getSliderValue(event)}
            />
            <p>Number of players</p>
          </label>
        </div>
        <div className="slidecontainer">
          <label>
            <input
              id="width"
              type="range"
              value={this.state.playtime}
              min="10"
              max="90"
              onChange={(event: any) => this.getSliderValue(event)}
            />
            <p>Playtime</p>
          </label>
        </div>
        <div className="slidecontainer">
          <label>
            <input
              id="width"
              type="range"
              value={this.state.price}
              min="2"
              max="100"
              onChange={(event: any) => this.getSliderValue(event)}
            />
            <p>Price</p>
          </label>
        </div>
        <div className="slidecontainer">
          <label>
            <input
              id="width"
              type="range"
              value={this.state.minAge}
              min="8"
              max="18"
              onChange={(event: any) => this.getSliderValue(event)}
            />
            <p>Minimum Age</p>
          </label>
        </div>
      </form>
    );
  }
}

export default SearchForm;
