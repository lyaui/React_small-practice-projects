import axios from 'axios';

const axioRequest = axios.create({ baseURL: 'https://covid19.mathdro.id/api' });

export const fetchData = async (country) => {
  let path = country ? `countries/${country}` : null;

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axioRequest.get(path);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axioRequest.get('/daily');
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed,
      deaths: dailyData.deaths,
      reportDate: dailyData.reportDate,
    }));
    return modifiedData;
  } catch {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axioRequest.get('/countries');
    return countries;
  } catch {}
};
