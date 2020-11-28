import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../Buttons/Buttons';
import CloseIcon from '@material-ui/icons/Close';
import { motion } from 'framer-motion';

import './Modal.css';

const Modal = (props) => {
  const closeIcon = <CloseIcon />;
  return ReactDOM.createPortal(
    <div className='modal'>
      <motion.div
        animate={{ y: 430 }}
        className='modal__container'
        onClick={() => {}}>
        <div className='modal__imageContainer'>
          <img className='modal__image' src={props.image} alt='product' />
        </div>
        <div className='modal__info'>
          <div className='modal__buttons'>
            <Button icon={closeIcon} onClick={props.setIsOpen} type='danger' />
          </div>
          <div className='modal__title'>{props.name}</div>
          <div className='modal__price'>Price: ${props.price}</div>
          <div className='modal__description'>
            <div className='modal__descriptionTitle'>Description</div>
            <div className='modal__descriptionText'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
