import React from 'react';
import './App.scss';
import { setConstantValue } from 'typescript';
import SearchDisplay from '../SearchDisplay/SearchDisplay';
import SearchForm from '../SearchForm/SearchForm';
import { receiveMessageOnPort } from 'worker_threads';

const App = () => {
  return (
    <main className="App">
      {/* <div className="logo">
        <Logo />
      </div> */}
      <div className="search-form-link">
        <SearchForm />
      </div>
      <div className="search-trending">
        <SearchDisplay searchData={'trending'} />
      </div>
      <div className="search-top">
        <SearchDisplay searchData={'top'} />
      </div>
      <div className="search-two-player">
        <SearchDisplay searchData={'two-player'} />
      </div>
      <div className="search-four-player">
        <SearchDisplay searchData={'four-player'} />
      </div>
    </main>
  );
};

export default App;
