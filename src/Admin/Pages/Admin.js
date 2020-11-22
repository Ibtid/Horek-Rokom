import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import AdminProductsList from '../Components/AdminProducts/AdminProductsList';
import { DummyProducts } from '../../components/Products/DummyProducts';
import { v4 as uuidv4 } from 'uuid';
import './Admin.css';
import NewProduct from '../Components/NewProducts/NewProduct';

const Admin = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { id: uuidv4(), name: name, price: price, image: image };
    DummyProducts.push(newProduct);
    setImage('');
    setName('');
    setPrice(0);
  };

  return (
    <div className='admin'>
      <Header />
      <div className='admin__body'>
        <div className='admin__showcase'>
          <AdminProductsList DummyProducts={DummyProducts} />
        </div>
        <div className='admin__form'>
          <NewProduct
            price={price}
            name={name}
            handleImage={handleImage}
            handleName={handleName}
            handlePrice={handlePrice}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
