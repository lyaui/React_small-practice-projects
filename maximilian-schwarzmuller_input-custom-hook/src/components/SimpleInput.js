// import { useState } from 'react';
// import useInput from '../hooks/useInput';

// const Input = ({ label, type, id }) => {
//   let validateFn = () => {};
//   const isEmpty = (val) => val.trim() === '';
//   const isEmail = (val) => {
//     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val))
//       return true;
//     return false;
//   };
//   if (label === 'name') validateFn = isEmpty;
//   if (label === 'email') validateFn = isEmail;
//   const { value, isValid, hasError, inputChangeHandler, inputBlurHandler } = useInput(validateFn);
//   const nameInputClasses = isValid ? 'form-control' : 'form-control invalid';

//   return (
//     <div className={nameInputClasses}>
//       <label htmlFor={label}>Your {label}</label>
//       <input
//         onBlur={inputBlurHandler}
//         onChange={inputChangeHandler}
//         value={value}
//         type={type}
//         id={id}
//       />
//       {hasError && <p className='error-text'></p>}
//     </div>
//   );
// };

// const SimpleInput = (props) => {
//   // form validation
//   let formIsValid = false;
//   if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

//   // handle form submit
//   const formSubmissionHandler = (e) => {
//     e.preventDefault();
//     setisInputTouched(false);
//     if (nameInputIsInvalid || emailInputIsInvalid) return;
//     resetForm();
//   };

//   const resetForm = () => {
//     setEnteredenteredVal('');
//     setisInputTouched(false);
//   };

//   return (
//     <form>
//       {/* name */}
//       <Input label={'name'} type='text' id='name'></Input>
//       {/* email */}
//       <Input label={'email'} type='email' id='email'></Input>

//       <div className='form-actions'>
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
