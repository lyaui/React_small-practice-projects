import { useReducer } from 'react';

// const useInput = (validateValue) => {
//   const [enteredVal, setEnteredVal] = useState('');
//   const [isTouched, setIsTouched] = useState(false);

//   const inputChangeHandler = (e) => {
//     setEnteredVal(e.target.value);
//   };
//   const inputBlurHandler = () => {
//     setIsTouched(true);
//   };

//   const resetForm = () => {
//     setEnteredVal('');
//     setIsTouched(false);
//   };

//   const isValid = validateValue(enteredVal);
//   const hasError = isTouched && !isValid;

//   return { value: enteredVal, isValid, hasError, inputChangeHandler, inputBlurHandler, resetForm };
// };

const initInputState = { value: '', isTouched: false };

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, value: action.payload };
    case 'BLUR':
      return { ...state, isTouched: true };
    case 'RESET':
      return { ...state, value: '', isTouched: false };
    default:
      return { ...state };
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(inputStateReducer, initInputState);

  const inputChangeHandler = (e) => {
    dispatchInput({ type: 'INPUT', payload: e.target.value });
  };
  const inputBlurHandler = () => {
    dispatchInput({ type: 'BLUR' });
  };
  const resetForm = () => {
    dispatchInput({ type: 'RESET' });
  };

  const isValid = validateValue(inputState.value);
  const hasError = inputState.isTouched && !isValid;

  return {
    value: inputState.value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetForm,
  };
};

export default useInput;
