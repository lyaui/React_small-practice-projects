import { Fragment } from 'react';
import { getEventById, getAllEvents } from '../../helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary.js';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

function EventDetailPage(props) {
  const { event } = props;
  if (!event)
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>
    );
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export const getStaticProps = async (context) => {
  const { eventId } = context.params;
  console.log({ eventId });
  const event = await getEventById(eventId);
  if (!event) return { notFound: true };
  return { props: { event }, revalidate: 30 };
};

export const getStaticPaths = async () => {
  const events = await getAllEvents();
  //  比起全部頁面都要 pre-generate，部分頁面 pre-generate 就好（這邊選 isFeatured 的頁面）
  const paths = events
    .filter((event) => event.isFeatured)
    .map((event) => ({
      params: { eventId: event.id },
    }));
  return { paths, fallback: true };
};

export default EventDetailPage;
