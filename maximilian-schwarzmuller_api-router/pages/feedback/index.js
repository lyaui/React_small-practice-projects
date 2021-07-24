import { Fragment, useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function feedbackPage(props) {
  const [feedback, setFeedback] = useState();
  const { feedbacks } = props;
  const loadFeedbackHandler = (id) => async () => {
    const res = await fetch(`/api/feedback/${id}`);
    const { item } = await res.json();
    setFeedback(item);
  };

  return (
    <Fragment>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            {feedback.text}
            <button onClick={loadFeedbackHandler(feedback.id)}>Show Details</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return { props: { feedbacks: data } };
};

export default feedbackPage;
