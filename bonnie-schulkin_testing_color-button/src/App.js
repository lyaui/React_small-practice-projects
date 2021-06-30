import { useState, useEffect } from 'react';
import './App.css';

export const replaceCamelWithSpace = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonStyle, setButtonStyle] = useState({
    color: 'MediumVioletRed',
    text: 'Change to MidnightBlue',
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const changeButton = () => {
    const color = buttonStyle.color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
    setButtonStyle((preState) => ({ ...preState, color, text: `Change to ${preState.color}` }));
  };

  const toggleButtonDisabled = (e) => {
    setButtonDisabled(e.target.checked);
  };

  useEffect(() => {
    if (buttonDisabled) setButtonStyle((preState) => ({ ...preState, color: 'grey' }));
    if (!buttonDisabled)
      setButtonStyle((preState) => ({
        ...preState,
        color: preState.text === 'Change to MidnightBlue' ? 'MediumVioletRed' : 'MidnightBlue',
      }));
  }, [buttonDisabled]);

  return (
    <>
      <button
        onClick={changeButton}
        style={{ backgroundColor: buttonStyle.color }}
        disabled={buttonDisabled}
      >
        {buttonStyle.text}
      </button>
      <input id='disable-button-checkbox' onChange={toggleButtonDisabled} type='checkbox' />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </>
  );
}
console.log('test');
export default App;
