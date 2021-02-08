import React from 'react';
import LogoIcon from '../../../Resources/Picture/Logo/LogoIcon.PNG';

import './Slider.css';

const Slider = (props) => {
  return (
    <div className={props.currentActive} onClick={props.onClick}>
      <div className='inner-container'>
        <div className='text'>
          <div className='logo__iconContainer'>
            <img className='logo__icon' src={LogoIcon} alt='BucketIn' />
          </div>
          <div className='message'>{props.currentMessage}</div>
          <div>{props.current}</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
