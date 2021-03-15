import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  const renderList = () =>
    blogs.map(({ id, title, author }) => (
      <div className='blog-preview' key={id}>
        <Link to={`blogs/${id}`}>
          {' '}
          <h2>{title}</h2>
          <p>Written by {author}</p>
        </Link>
      </div>
    ));
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {renderList()}
    </div>
  );
};

export default BlogList;
