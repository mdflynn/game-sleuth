import React, { Component } from 'react';
import './App.scss';
import SearchDisplay from '../SearchDisplay/SearchDisplay';
import SearchForm from '../SearchForm/SearchForm';
import MainPage from '../MainPage/MainPage';
import { Route, Switch, useLocation } from 'react-router-dom';
import { SoloGameView } from '../SoloGameView/SoloGameView';

interface SearchState {
  searchCriteria: string;
}

class App extends Component<any, SearchState> {
  state: SearchState = {
    searchCriteria: '',
  };

  // check what type event should be
  updateSearchCriteria = (event: any) => {
    this.setState({ searchCriteria: event.target.dataset.value });
  };

  render() {
    return (
      <main className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <MainPage updateSearchCriteria={this.updateSearchCriteria} />
              );
            }}
          />
          <Route
            exact
            path="/form"
            render={() => {
              return <SearchForm />;
            }}
          />
          <Route
            exact
            path="/:criteria"
            render={() => {
              return (
                <SearchDisplay searchCriteria={this.state.searchCriteria} />
              );
            }}
          />
          <Route
            exact
            path="/game/:id"
            render={() => {
              return <SoloGameView />;
              // Use a find to get game info by ID
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
