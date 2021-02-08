import React, { useState, useRef, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import './NewProducts.css';
import { motion } from 'framer-motion';
import { useStateValue } from '../../../StateProvider/StateProvider';
import Service from '../../../services/services';
import Button from '../../../SharedComponents/UIElements/Buttons/Buttons';
import Preview from '../../../Resources/Picture/Products/preview.png';

const NewProduct = () => {
  const [state, dispatch] = useStateValue();
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [file, setFile] = useState();
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(Preview);
  const [description, setDescription] = useState('');

  const filePickerRef = useRef();

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleImage = (event) => {
    const pickedFile = event.target.files[0];
    setFile(pickedFile);
    //setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const addProduct = (event) => {
    event.preventDefault();
    var data = {
      name: name,
      price: price,
      image: image,
      description: description,
      category: category,
    };

    Service.addNewProduct(data).then((response) => {
      dispatch({
        type: 'ADD_PRODUCT',
        product: {
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
          image: response.data.image,
          description: response.data.description,
          category: response.data.category,
        },
      });
    });
    setImage(Preview);
    setName('');
    setPrice();
    setDescription('');
    setCategory('');
    console.log('this is products');
    console.log(state.products);
    console.log(image);
  };
  return (
    <div className='newProduct'>
      <div className='newProduct__header'>ADD PRODUCT</div>
      <form className='newProduct__form' onSubmit={addProduct}>
        <div className='newProduct__textInput'>
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
            <label className='newProduct__inputLabel' htmlFor='name'>
              Category
            </label>
            <input
              type='text'
              className='newProduct__input'
              id='category'
              name='category'
              placeholder='Enter Category Name'
              value={category}
              onChange={handleCategory}
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
              placeholder='Enter Product Price'
              value={price}
              onChange={handlePrice}
            />
          </div>
          <div className='newProduct__inputSection'>
            <label className='newProduct__inputLabel' htmlFor='name'>
              Description
            </label>
            <input
              type='text'
              className='newProduct__input'
              id='description'
              name='description'
              placeholder='Enter Product Details'
              value={description}
              onChange={handleDescription}
            />
          </div>
        </div>
        <div className='newProduct__buttonInput'>
          <div className='newProduct__inputSection'>
            <input
              style={{ display: 'none' }}
              ref={filePickerRef}
              type='file'
              className='newProduct__input'
              id='image'
              name='image'
              placeholder='Choose the image'
              accept='.jpg,.png,.jpeg'
              onChange={handleImage}
            />
            <div className='newProduct__imagePreview'>
              <div className='newProduct__imagePreviewContainer'>
                <img className='imagePreview' src={image} alt='Preview' />
              </div>
              <Button
                type='default'
                message='PICK IMAGE'
                onClick={pickImageHandler}
              />
            </div>
          </div>

          <div className='newProduct__formButtonSection'>
            <motion.button
              whileTap={{ scale: 0.85 }}
              type='submit'
              className='newProduct__addButton'>
              <AddIcon />
              ADD
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
