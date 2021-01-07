import React from 'react';
import './MainPage.scss';
import { Link } from "react-router-dom"

interface MyProps {
  updateSearchCriteria: (event:any) => void
}

const MainPage:React.FC<MyProps> = ({ updateSearchCriteria }) => {

  return(
    <main>
      {/* <div className="logo">
        <Logo />
      </div> */}

      <Link
        className="search-form-link"
        to="/form"
      >
        <div className="diamond">
          <h1>Search Form</h1>
        </div>
      
      </Link>

      <Link 
        className="search-trending"
        to="/trending"
      >
          <div className=""
          data-value="trending"
          onClick={updateSearchCriteria}
          >
          Trending Games
          </div>
          
      </Link>

      <Link 
        className="search-top"
        to="/top"
      >
          <div className=""
          data-value="top-10"
          onClick={updateSearchCriteria}
          >
          Top 10 Games
          </div>
          
      </Link>

      <Link 
        className="search-two-player"
        to="/max_player=2"
      >
          <div className=""
          data-value="max_players=2"
          onClick={updateSearchCriteria}
          >
          2 Player Games
          </div>
          
      </Link>

      <Link 
        className="search-four-player"
        to="/max_players=4"
      >
          <div className=""
          data-value="max_player=4"
          onClick={updateSearchCriteria}
          >
          4 Player Games
          </div>
          
      </Link>

      
    </main>
  )
}

export default MainPage;