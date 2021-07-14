import EventItem from './EventItem';
import classes from './EventList.module.css';

function eventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
        />
      ))}
    </ul>
  );
}

export default eventList;
