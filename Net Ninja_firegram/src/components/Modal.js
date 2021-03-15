import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='backdrop'
      onClick={() => setSelectedImg(null)}
    >
      <motion.img
        initial={{ y: -100 + 'vh' }}
        animate={{ y: 0 }}
        src={selectedImg}
        alt='enlarged pic'
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

export default Modal;
