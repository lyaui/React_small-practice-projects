import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

function BookDetails(props) {
  const { book, theme } = props;
  const { dispatch } = useContext(BookContext);
  return (
    <li
      onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}
      style={{ backgroundColor: theme.ui }}
    >
      {book.title}
    </li>
  );
}

export default BookDetails;
