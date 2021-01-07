import React from 'react';
import './MainPage.scss';
import { Link } from "react-router-dom"

interface MyProps {
  updateSearchCriteria: (event:any) => void
}

const MainPage:React.FC<MyProps> = ({ updateSearchCriteria }) => {

  return(
    <main className="container">

      <div className="logo diamond">
        <h1>LOGO</h1>
      </div>

      <Link
        className="remove-link"
        to="/form"
      >
        <div className="search-form diamond">
          <h1>Search Form</h1>
        </div>
      
      </Link>

      <Link 
        className=" remove-link"
        to="/trending"
      >
          <div className="search-trending diamond"
          data-value="trending"
          onClick={updateSearchCriteria}
          >
          <h3>Trending Games</h3>
          </div>
          
      </Link>

      <Link 
        className=" remove-link"
        to="/top"
      >
          <div className="search-top diamond"
          data-value="top-10"
          onClick={updateSearchCriteria}
          >
          <h3>Top 10 Games</h3>
          </div>
          
      </Link>

      <Link 
        className=" remove-link"
        to="/max_player=2"
      >
          <div className="search-two-player diamond"
          data-value="max_players=2"
          onClick={updateSearchCriteria}
          >
          <h3>2 Player Games</h3>
          </div>
          
      </Link>

      <Link 
        className=" remove-link"
        to="/max_players=4"
      >
          <div className="search-four-player diamond"
          data-value="max_player=4"
          onClick={updateSearchCriteria}
          >
          <h3>4 Player Games</h3>
          </div>
          
      </Link>

      
    </main>
  )
}

export default MainPage;