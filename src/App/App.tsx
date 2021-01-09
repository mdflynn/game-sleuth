import React from "react";
import "./App.scss";
import SearchDisplay from "../SearchDisplay/SearchDisplay";
import SearchForm from "../SearchForm/SearchForm";
import MainPage from "../MainPage/MainPage";
import { Route, Switch, Link } from "react-router-dom";
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
        <Route render={() => {
          return(
            <section>
            <h2>This page does not exist</h2>
            <Link to="/"><button>Return Home</button></Link>
            </section>
          )
        }} />
      </Switch>
    </main>
  );
};

export default App;
