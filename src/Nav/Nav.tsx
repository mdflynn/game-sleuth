import React from "react";
import "./Nav.scss";
import sleuth from "../assets/sleuth.png";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav>
      <Link className="sleuth-link" to={"/"}>
        <div className="sleuth-div">
          <p>Game Slueth</p>
          <img className="sleuth" src={sleuth} />
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
