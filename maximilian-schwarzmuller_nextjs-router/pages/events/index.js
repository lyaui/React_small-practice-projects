import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getAllEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/EventsSearch';

function AllEventsPage(props) {
  const router = useRouter();
  const events = props.events;
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve...' />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events}></EventList>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const events = await getAllEvents();
  if (!events) return { notFound: true };
  return { props: { events }, revalidate: 60 };
};

export default AllEventsPage;
