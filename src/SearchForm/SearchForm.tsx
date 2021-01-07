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

  handleChange(event: any) {
    const { name, value } = event.target;    
    this.setState({...this.state, [name]:value});
  }

  handleSubmit = (event:any) => {
    event.preventDefault();
    //fetch data here and pass down method to update searchCriteria in App
    //which should render SearchDisplay
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <h1>Search for Games!</h1>
        <div className="slidecontainer">
          <label>
            <input
              id="width"
              type="range"
              value={this.state.numPlayers}
              min="2"
              max="8"
              name="numPlayers"
              onChange={(event: any) => this.handleChange(event)}
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
              name="playtime"
              onChange={(event: any) => this.handleChange(event)}
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
              name="price"
              onChange={(event: any) => this.handleChange(event)}
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
              name="minAge"
              onChange={(event: any) => this.handleChange(event)}
            />
            <p>Minimum Age</p>
          </label>
        </div>
        <button>Search</button>
      </form>
    );
  }
}

export default SearchForm;
