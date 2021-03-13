import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  return (
    <div className='Home'>
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'All blogs!'}></BlogList>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
