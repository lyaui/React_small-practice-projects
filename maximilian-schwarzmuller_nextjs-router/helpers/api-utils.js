const url = 'https://node-practice-3b49e.firebaseio.com/events.json';

export const getAllEvents = async () => {
  const res = await fetch(url);
  const json = await res.json();
  let arrangedData = [];
  for (let key in json) {
    arrangedData.push({ id: key, ...json[key] });
  }
  return arrangedData;
};

export const getFeaturedEvents = async () => {
  const arrangedData = await getAllEvents();
  return arrangedData.filter((event) => event.isFeatured) || [];
};

export const getEventById = async (id) => {
  const arrangedData = await getAllEvents();
  return arrangedData.find((event) => event.id === id);
};

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;
  const arrangedData = await getAllEvents();
  const filteredEvents = arrangedData.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
};
