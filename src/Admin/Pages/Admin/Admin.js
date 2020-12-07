import React from 'react';
import './Admin.css';
import Button from '../../../SharedComponents/UIElements/Buttons/Buttons';
import Logo from '../../../SharedComponents/Images/Logo/Logo';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='admin__main'>
      <div className='login'>
        <div className='login__container'>
          <Logo />
          <div className='admin__main__text'>
            <h1>ADMIN PANEL</h1>
          </div>
          <Link to='/admin/control' className='admin__Link'>
            <Button type='danger' message='Go to Admin Control' />
          </Link>
          <Button type='danger' message='Go to Orders List' />
        </div>
      </div>
    </div>
  );
};

export default Admin;
