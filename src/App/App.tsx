import React from "react";
import "./App.scss";
import SearchDisplay from "../SearchDisplay/SearchDisplay";
import SearchForm from "../SearchForm/SearchForm";
import MainPage from "../MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
import { SoloGameView } from "../SoloGameView/SoloGameView";

const App: React.FC = () => {
  return (
    <main className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <MainPage />;
          }}
        />
        <Route
          exact
          path="/form"
          render={() => {
            return <SearchForm />;
          }}
        />
        <Route exact path="/:criteria" component={SearchDisplay} />
        <Route
          exact
          path="/game/:id"
          render={() => {
            return <SoloGameView />;
          }}
        />
      </Switch>
    </main>
  );
};

export default App;
