import React from 'react';

const Demo = ({ showParagraph }) => {
  console.log('CHILD APP RUNNING');
  return <div>{showParagraph && 'YO'}</div>;
};

export default React.memo(Demo);
