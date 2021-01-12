import React from 'react';
import './Nav.scss';
import sleuth from '../assets/sleuth.png';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="nav-styling">
      <Link className="sleuth-link" to={'/'}>
        <div className="sleuth-div">
          <h2>Game</h2>
          <img className="sleuth-img" src={sleuth} alt="sleuth logo" />
          <h2>Sleuth</h2>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
