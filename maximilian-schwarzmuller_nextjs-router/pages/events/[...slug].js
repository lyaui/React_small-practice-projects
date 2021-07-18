import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getFilteredEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';

function FilteredEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState();

  // 現抓的全部資料
  const { data, error } = useSWR('https://node-practice-3b49e.firebaseio.com/events.json');
  useEffect(() => {
    if (data) {
      let arrangedData = [];
      for (let key in data) {
        arrangedData.push({ id: key, ...data[key] });
      }
      setLoadedEvents(arrangedData);
    }
  }, [data]);

  if (!loadedEvents) return <p className='center'>Loading...</p>;

  // 現抓的日期
  const router = useRouter();
  const filterData = router.query.slug;
  const numYear = +filterData[0];
  const numMonth = +filterData[1];
  const date = new Date(numYear, numMonth - 1);

  // 確認現抓的日期有沒有問題
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  )
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the choosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   const [year, month] = context.query.slug;

//   const numYear = +year;
//   const numMonth = +month;

//   // 確保輸入的都是數字而不是 /ewrewf/fewf 這種
//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   )
//     return {
//       props: { hasError: true },
//       // notFound: true,
//     };

//   const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });
//   return { props: { filteredEvents, numDate: { year: numYear, month: numMonth } } };
// };

export default FilteredEventsPage;
