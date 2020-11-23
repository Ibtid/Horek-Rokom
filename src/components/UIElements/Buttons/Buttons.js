import React from 'react';
import './Button.css';

const Buttons = (props) => {
  return (
    <div className='button' onClick={props.onClick}>
      <div className={props.type}>
        {props.icon}
        {props.message}
      </div>
    </div>
  );
};

export default Buttons;
