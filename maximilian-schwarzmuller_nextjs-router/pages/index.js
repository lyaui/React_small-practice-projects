import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/EventList';

function HomePage({ featuredEvents }) {
  return (
    <div>
      <Head>
        <title>NextEvents</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...' />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  const data = await getFeaturedEvents();
  return { props: { featuredEvents: data }, revalidate: 1800 };
};
