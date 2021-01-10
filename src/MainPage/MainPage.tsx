import React from 'react';
import './MainPage.scss';
import { Link } from "react-router-dom"

interface MyProps {
  updateSearchCriteria: (event:any) => void
}

const MainPage:React.FC<MyProps> = ({ updateSearchCriteria }) => {

  return(
    <ul className="container">

      <Link
        className="remove-link"
        to="/form"
      >
        <li className="search-form diamond">
          <h3>Search Form</h3>
        </li>
      
      </Link>

      <Link 
        className=" remove-link"
        to="/trending"
      >
          <li className="search-trending"
          data-value="trending"
          onClick={updateSearchCriteria}
          >
          <h3>Trending Games</h3>
          </li>
          
      </Link>

      <Link 
        className=" remove-link"
        to="/top"
      >
          <li className="search-top"
          data-value="top-10"
          onClick={updateSearchCriteria}
          >
          <h3>Top 10 Games</h3>
          </li>
          
      </Link>

      <Link 
        className=" remove-link"
        to="/max_player=2"
      >
          <li className="search-two-player"
          data-value="max_players=2"
          onClick={updateSearchCriteria}
          >
          <h3>2 Player Games</h3>
          </li>
          
      </Link>

      <Link 
        className=" remove-link"
        to="/max_players=4"
      >
          <li className="search-four-player"
          data-value="max_player=4"
          onClick={updateSearchCriteria}
          >
          <h3>4 Player Games</h3>
          </li>
          
      </Link>

      
    </ul>
  )
}

export default MainPage;