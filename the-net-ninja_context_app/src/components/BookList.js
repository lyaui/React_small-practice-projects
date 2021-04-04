import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  const renderList = () =>
    books.map((book) => <BookDetails book={book} key={book.id} theme={theme}></BookDetails>);

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.syntax }} className='book-list'>
      <h1>My Reading List</h1>
      <p>Currently I have {books.length} books to get through...</p>
      <ul>{books && renderList()}</ul>
    </div>
  );
};

export default BookList;
