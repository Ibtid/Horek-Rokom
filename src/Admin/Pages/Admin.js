import React from 'react';
import Header from '../Components/Header/Header';
import AdminProductsList from '../Components/AdminProducts/AdminProductsList';
import './Admin.css';
import NewProduct from '../Components/NewProducts/NewProduct';

const Admin = () => {
  return (
    <div className='admin'>
      <Header />
      <div className='admin__body'>
        <div className='admin__showcase'>
          <AdminProductsList />
        </div>
        <div className='admin__form'>
          <NewProduct />
        </div>
      </div>
    </div>
  );
};

export default Admin;
