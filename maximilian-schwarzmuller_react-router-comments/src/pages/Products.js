import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/book'>A Book</Link>
        </li>
        <li>
          <Link to='/products/carpet'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/course'>An online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
