import React, { useState } from 'react';
import './SignInForm.css';
import Slider from '../../UserComponent/SignIn/Slider/Slider';
import Login from '../../UserComponent/SignIn/LoginAndRegister/Login';
import Register from '../../UserComponent/SignIn/LoginAndRegister/Register';

const SignInForm = () => {
  const [isLogginActive, setisLogginActive] = useState(true);

  const switchLogginHandler = () => {
    setisLogginActive(!isLogginActive);
  };

  var current = isLogginActive ? 'Register here' : 'Login here';
  var currentMessage = isLogginActive ? 'New with us?' : 'Have an account?';
  var currentActive = isLogginActive ? 'right-side left' : 'right-side right';

  return (
    <div className='SignIn'>
      <div className='login'>
        <div className='container'>
          {isLogginActive && <Login />}
          {!isLogginActive && <Register />}
        </div>
        <Slider
          current={current}
          currentMessage={currentMessage}
          currentActive={currentActive}
          isLogginActive={isLogginActive}
          onClick={switchLogginHandler}
        />
      </div>
    </div>
  );
};

export default SignInForm;
