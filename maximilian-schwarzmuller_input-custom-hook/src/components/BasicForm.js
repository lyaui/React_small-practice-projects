import useInput from '../hooks/useInput';

const BasicForm = (props) => {
  const hasValue = (val) => val.trim() !== '';
  const isEmail = (val) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val))
      return true;
    return false;
  };
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetForm: resetFirstNameInput,
  } = useInput(hasValue);
  const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetForm: resetLastNameInput,
  } = useInput(hasValue);
  const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetForm: resetemailInput,
  } = useInput(isEmail);
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

  const isFormValid = firstNameIsValid && lastNameIsValid && emailIsValid;
  const formSubmitHandler = (e) => {
    e.preventDefault();
    resetFirstNameInput();
    resetLastNameInput();
    resetemailInput();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        {/* first name */}
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
            type='text'
            id='firstName'
          />
          {firstNameHasError && <p className='error-text'>Please enter first name</p>}
        </div>
        {/* last name */}
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
            type='text'
            id='lastName'
          />
          {lastNameHasError && <p className='error-text'>Please enter last name</p>}
        </div>
      </div>
      {/* email */}
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
          type='text'
          id='email'
        />
        {emailHasError && <p className='error-text'>Please enter correct email format</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
