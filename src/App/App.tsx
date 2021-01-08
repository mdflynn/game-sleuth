import React, { useEffect, useState } from "react";
import "./App.scss";
import SearchDisplay from "../SearchDisplay/SearchDisplay";
import SearchForm from "../SearchForm/SearchForm";
import MainPage from "../MainPage/MainPage";
import { Route, Switch } from "react-router-dom";



const App:React.FC = () => {
  // const [searchCriteria, setSearchCriteria] = useState('')

  // const updateSearchCriteria = (event: any) => {
  //   setSearchCriteria(event.target.dataset.value);
  // };

  // const getUserSearchResults = (search: string) => {
  //   setSearchCriteria(search);
  // };
  
  return (
    <main className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <MainPage  />
            );
          }}
        />
        <Route
          path="/form"
          render={() => {
            return <SearchForm />;
          }}
        />
        <Route
          path="/:criteria"
          component={SearchDisplay}
        />
      </Switch>
    </main>
  );
}

// class App extends Component<any, SearchState> {
//   state: SearchState = {
//     searchCriteria: "",
//   };

//   // check what type event should be
  // updateSearchCriteria = (event: any) => {
  //   this.setState({ searchCriteria: event.target.dataset.value });
  // };

  // getUserSearchResults = (search: string) => {
  //   console.log(search);

  //   this.setState({ searchCriteria: search });

  //   console.log(this.state.searchCriteria);
  // };

//   render() {
//     return (
//       <main className="App">
//         <Switch>
//           <Route
//             exact
//             path="/"
//             render={() => {
//               return (
//                 <MainPage updateSearchCriteria={this.updateSearchCriteria} />
//               );
//             }}
//           />
//           <Route
//             path="/form"
//             render={() => {
//               return <SearchForm data={this.getUserSearchResults} />;
//             }}
//           />
//           <Route
//             path="/:criteria"
//             render={() => {
//               return (
//                 <SearchDisplay searchCriteria={this.state.searchCriteria} />
//               );
//             }}
//           />
//         </Switch>
//       </main>
//     );
//   }
// }

export default App;
