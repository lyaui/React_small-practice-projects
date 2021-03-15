import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  const onClickDeletBlog = async () => {
    await fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    });
    history.push('/');
  };
  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={onClickDeletBlog}>delete</button>
        </article>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default BlogDetails;
