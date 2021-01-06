import React, { Component } from 'react';
import './SearchDisplay.scss';

interface IProps {}

interface IState {
  playOrPause?: string;
}
// const SearchDisplay = ({searchData}: SearchCriteria) => {

//   componentDidMount() {
//     API.fetchData(searchData)
//   }

class SearchDisplay extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      // playOrPause: "Play",
    };
  }

  render() {
    return <h1>{this.props.searchData}</h1>;
  }
}

export default SearchDisplay;
