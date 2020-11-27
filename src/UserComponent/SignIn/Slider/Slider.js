import React from 'react';
import './Slider.css';

const Slider = (props) => {
  return (
    <div className={props.currentActive} onClick={props.onClick}>
      <div className='inner-container'>
        <div className='text'>
          <div className='message'>{props.currentMessage}</div>
          <div>{props.current}</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
