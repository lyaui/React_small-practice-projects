import { useRef, useState } from 'react';

function HomePage() {
  const [feedbacks, setFeedbacks] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    if (!enteredEmail || !enteredFeedback) return;

    const res = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail, text: enteredFeedback }),
      headers: { 'Content-Type': 'application/json' },
    });
    await res.json();
  };

  const loadFeedbackHandler = async () => {
    const res = await fetch('/api/feedback');
    const data = await res.json();
    setFeedbacks(data.feedback);
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea id='feedback' rows='5' ref={feedbackInputRef}></textarea>
        </div>
        <button type='submit'>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>LoadFeedback</button>
      {
        <ul>
          {feedbacks.map((feedback) => (
            <li key={feedback.id}>{(feedback.text, feedback.email)}</li>
          ))}
        </ul>
      }
    </div>
  );
}

export default HomePage;
