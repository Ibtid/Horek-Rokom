import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import './NewProducts.css';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { useStateValue } from '../../../StateProvider/StateProvider';

const NewProduct = () => {
  const [state, dispatch] = useStateValue();
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

  const addProduct = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_PRODUCT',
      product: {
        id: uuidv4(),
        name: name,
        price: price,
        image: image,
      },
    });
    setImage('');
    setName('');
    setPrice(0);
  };
  return (
    <div className='newProduct'>
      <div className='newProduct__header'>ADD PRODUCT</div>
      <form className='newProduct__form' onSubmit={addProduct}>
        <div className='newProduct__inputSection'>
          <label className='newProduct__inputLabel' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            className='newProduct__input'
            id='name'
            name='name'
            placeholder='Enter Product Name'
            value={name}
            onChange={handleName}
          />
        </div>
        <div className='newProduct__inputSection'>
          <label className='newProduct__inputLabel' htmlFor='price'>
            Price
          </label>
          <input
            type='number'
            className='newProduct__input'
            id='price'
            name='price'
            placeholder='Set the price'
            value={price}
            onChange={handlePrice}
          />
        </div>
        <div className='newProduct__inputSection'>
          <label className='newProduct__inputLabel' htmlFor='image'>
            Image
          </label>
          <input
            type='file'
            className='newProduct__input'
            id='image'
            name='image'
            placeholder='Choose the image'
            onChange={handleImage}
          />
        </div>
        <div className='newProduct__formButtonSection'>
          <motion.button
            whileTap={{ scale: 0.9 }}
            type='submit'
            className='newProduct__addButton'>
            <AddIcon />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
