import React, { Component } from "react";
import "./SearchDisplay.scss";
import MyBoardGame from "../interfaces/MyBoardGame.interface";
import { fetchSearchResults } from "../APIcalls";

interface MyProps {
  searchData: string;
}

class SearchDisplay extends Component<MyProps, MyBoardGame> {
  state: MyBoardGame = {
    boardGames: [
      // {
      //   id: "sweet string",
      //   name: "sweet string",
      //   min_players: 0,
      //   max_players: 0,
      //   min_age: 0,
      //   image_url: "sweet string",
      //   description: "sweet string",
      //   price: "sweet string",
      //   url: "sweet string",
      //   primary_publisher: { name: "sweet string" },
      //   mechanics: [{ id: "sweet string" }],
      //   average_user_rating: 0,
      //   num_user_ratings: 0,
      //   rank: 0,
      //   trending_rank: 0,
      //   rules_url: "sweet string",
      // },
    ]
  };

  componentDidMount() {
    fetchSearchResults()
      .then(data => {
        this.setState({boardGames: data.games})
        console.log(this.state.boardGames)
        
      })
  }

  functionToMapDisplayFetchData() {}

  render() {
    return (
      <h1>
        {this.props.searchData}
        {this.state.boardGames[0] && <h1>{this.state.boardGames[0].name}</h1>}
      </h1>
    );
  }
}

export default SearchDisplay;
