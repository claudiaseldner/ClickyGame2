import React from 'react';
import './Clickyboard.css';
import Images from '../Card';

const Clickyboard = props => (
 
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.characters.map((a, i) => <Images name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Clickyboard;