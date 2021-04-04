import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

function BookForm() {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title } });
    setTitle('');
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        paceholder='book title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input type='submit' value='add book' />
    </form>
  );
}

export default BookForm;
