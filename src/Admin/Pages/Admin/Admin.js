import React from 'react';
import './Admin.css';
import Button from '../../../SharedComponents/UIElements/Buttons/Buttons';
import Logo from '../../../SharedComponents/Images/Logo/Logo';
import bgImage from '../../../Resources/Picture/Background/login_admin.jpeg';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='admin__main'>
      <div className='admin__imageContainer'>
        <img className='admin__image' src={bgImage} alt='picture' />
      </div>
      <div className='login__container'>
        <Logo />
        <div className='admin__main__text'>
          <h1>ADMIN</h1>
        </div>
        <Link to='/admin/control' className='admin__Link'>
          <Button type='danger' message='Go to Store' />
        </Link>
        <Link to='/admin/order' className='admin__Link'>
          <Button type='danger' message='Go to Orders List' />
        </Link>
      </div>
    </div>
  );
};

export default Admin;
