import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <div className="navbar">
    <div>Clicky Game</div>
    <div className={props.Message2}>{props.Message}</div>
    <div>
      Score: {props.score} <span className="score">|</span> Top Score: {props.highScore}
    </div>
  </div>
);

export default Navbar;