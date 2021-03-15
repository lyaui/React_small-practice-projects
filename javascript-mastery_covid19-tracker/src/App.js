import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './apis/index';

const App = () => {
  const [data, setData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetchData(selectedCountry);
      setData(response);
    })();
  }, [selectedCountry]);

  const handleChangeSelector = (country) => {
    setSelectedCountry(country);
    console.log(selectedCountry);
  };

  return (
    <div className={styles.container}>
      {!data && <div>Loading...</div>}
      {data && <Cards data={data}></Cards>}
      <CountryPicker handleChangeSelector={handleChangeSelector}></CountryPicker>
      <Chart data={data} selectedCountry={selectedCountry}></Chart>
    </div>
  );
};

export default App;
