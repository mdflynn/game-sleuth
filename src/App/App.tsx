import React, { Component } from 'react';
import './App.scss';
import SearchDisplay from '../SearchDisplay/SearchDisplay';
import SearchForm from '../SearchForm/SearchForm';
import MainPage from '../MainPage/MainPage'
import {  Route, Switch } from "react-router-dom"

interface SearchState {
  searchCriteria: string,
}


class App extends Component<any, SearchState> {
  state: SearchState = {
      searchCriteria: ''
    }

// check what type event should be 
  updateSearchCriteria = (event:any) => {
    this.setState({ searchCriteria: event.target.value })
  }  

  render () {
    return (
      <main className="App">

        <Switch>

        <Route exact path="/" render={() => {
          return <MainPage updateSearchCriteria={this.updateSearchCriteria} />
        }} />
        <Route path="/form" render={() => {
          return <SearchForm />
        }}/>
        <Route path="/:criteria" render={() => {
            return <SearchDisplay searchCriteria={this.state.searchCriteria} />
        }} />

        </Switch>
      
      </main>
    )
  }
};

export default App;
