import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Buttons = (props) => {
  return (
    <motion.div
      whileTap={{ scale: 0.85 }}
      className='button'
      onClick={props.onClick}>
      <div className={props.type}>
        {props.icon}
        {props.message}
      </div>
    </motion.div>
  );
};

export default Buttons;
