import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import Demo from './components/UI/Button/Demo';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toogleParagraphHandler = useCallback(() => {
    setShowParagraph((prevState) => !prevState);
    setAllowToggle((prevState) => !prevState);
  }, []);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  console.log('APP RUNNING');
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {<Demo showParagraph={showParagraph}></Demo>}
      <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
      <Button onClick={toogleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
