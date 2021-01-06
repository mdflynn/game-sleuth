import React, { Component } from 'react';
import './SearchDisplay.scss';

type MyProps = {
  searchData: string;
};

type MyState = {
  boardGames: { name: string }[];
};

class SearchDisplay extends Component<MyProps, MyState> {
  // constructor(props: IProps) {
  //   super(props);
  state: MyState = {
    boardGames: [{ name: 'thing' }],
  };

  render() {
    return (
      <h1>
        {this.props.searchData}
        {this.state.boardGames[0].name}
      </h1>
    );
  }
}

export default SearchDisplay;
