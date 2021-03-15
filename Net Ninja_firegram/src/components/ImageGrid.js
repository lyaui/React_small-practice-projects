import React from 'react';
import useFireStore from '../hooks/useFireStore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore('images');
  const renderImageList = () => {
    return docs.map((img) => (
      <motion.div
        layout
        whileHover={{
          scale: 1.05,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        onClick={() => setSelectedImg(img.url)}
        className='img-wrap'
        key={img.createAt}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          src={img.url}
          alt='uploaded pic'
        />
      </motion.div>
    ));
  };
  return <div className='img-grid'>{docs && renderImageList()}</div>;
};

export default ImageGrid;
