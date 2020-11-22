import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import './NewProducts.css';

const NewProduct = ({
  price,
  name,
  handleImage,
  handleName,
  handlePrice,
  handleSubmit,
}) => {
  return (
    <div className='newProduct'>
      <div className='newProduct__header'>ADD PRODUCT</div>
      <form className='newProduct__form' onSubmit={handleSubmit}>
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
          <button type='submit' className='newProduct__addButton'>
            <AddIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
