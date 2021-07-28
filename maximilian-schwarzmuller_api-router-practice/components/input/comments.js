import { useState, useEffect } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import { useNotificationValue } from '../../store/notification-context';

function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const { notification, showNotification } = useNotificationValue();

  useEffect(() => {
    if (!showComments) return;
    fetchEventComments();
  }, [showComments]);

  const fetchEventComments = async () => {
    setIsFetching(true);
    try {
      const res = await fetch(`/api/comments/${eventId}`);
      const data = await res.json();
      const { comments } = data;
      setComments(comments);
    } catch {
    } finally {
      setIsFetching(false);
    }
  };

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = async (commentData) => {
    showNotification({
      title: 'Sending comment...',
      message: 'Adding new comment.',
      status: 'pending',
    });

    try {
      const res = await fetch(`/api/comments/${eventId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...commentData }),
      });
      const data = res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong!');
      showNotification({
        title: 'Success!',
        message: 'Successfully added new comment!',
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
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && isFetching && <p>Loading...</p>}
      {showComments && !isFetching && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
