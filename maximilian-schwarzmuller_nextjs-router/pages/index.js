import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/EventList';

function HomePage({ featuredEvents }) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  const data = await getFeaturedEvents();
  return { props: { featuredEvents: data }, revalidate: 1800 };
};
