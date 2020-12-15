import React, { useState, useEffect } from 'react';
import './SignInForm.css';
import Slider from '../../UserComponent/SignIn/Slider/Slider';
import Login from '../../UserComponent/SignIn/LoginAndRegister/Login';
import Register from '../../UserComponent/SignIn/LoginAndRegister/Register';
import Service from '../../services/services';
import { useStateValue } from '../../StateProvider/StateProvider';

const SignInForm = () => {
  const [isLogginActive, setisLogginActive] = useState(true);
  const [state, dispatch] = useStateValue();

  const switchLogginHandler = () => {
    setisLogginActive(!isLogginActive);
  };

  useEffect(() => {
    retrieveUser();
  }, []);

  const retrieveUser = () => {
    Service.getAllUser()
      .then((responses) => {
        console.log(responses.data);
        dispatch({
          type: 'RETRIEVE_USER',
          registeredUser: responses.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
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
