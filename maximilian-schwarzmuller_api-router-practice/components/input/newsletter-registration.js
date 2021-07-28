import { useRef } from 'react';
import classes from './newsletter-registration.module.css';
import { useNotificationValue } from '../../store/notification-context';

function NewsletterRegistration() {
  const { showNotification, hideNotification } = useNotificationValue();

  const inputEmailRef = useRef();

  const registrationHandler = async (event) => {
    event.preventDefault();

    const enteredEmailValue = inputEmailRef.current.value;
    if (!enteredEmailValue) return;

    showNotification({
      title: 'Sign up...',
      message: 'Registering for newsletter.',
      status: 'pending',
    });

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: enteredEmailValue }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = res.json();
      // status 400/500 不會造成 error 所以要另外使用 res.ok 來判斷
      if (!res.ok) throw new Error(data.message || 'Something went wrong!');

      showNotification({
        title: 'Success!',
        message: 'Successfully registered for newsletter!',
        status: 'success',
      });
    } catch (error) {
      showNotification({
        title: 'Error!',
        message: error.message || 'Something went wrong!',
        status: 'error',
      });
    }
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
