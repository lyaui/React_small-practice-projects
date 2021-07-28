import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const inputEmailRef = useRef();

  const registrationHandler = async (event) => {
    event.preventDefault();

    const enteredEmailValue = inputEmailRef.current.value;
    if (!enteredEmailValue) return;

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmailValue }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={inputEmailRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
