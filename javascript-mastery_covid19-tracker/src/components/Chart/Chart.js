import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../apis/index';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data, selectedCountry }) => {
  const [dailyData, setDailyData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetchDailyData();
      setDailyData(response);
    })();
  }, []);

  const lineChart = () => {
    const data = {
      labels: [...dailyData].map(({ reportDate }) => reportDate),
      datasets: [
        {
          label: 'Infected',
          data: [...dailyData].map(({ confirmed }) => confirmed.total),
          fill: true,
          borderColor: '#3333ff',
        },
        {
          label: 'Deaths',
          data: [...dailyData].map(({ deaths }) => deaths.total),
          fill: true,
          borderColor: 'red',
          backgroundColor: 'rgb(255, 0, 0)',
        },
      ],
    };
    return <Line data={data} />;
  };

  const barChart = () => {
    console.log(data);
    const test = {
      labels: ['Infected', 'Recovered', 'Deaths'],
      datasets: [
        {
          label: 'People',
          data: [data.confirmed.value, data.recovered.value, data.deaths.value],
          backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
          borderWidth: 1,
        },
      ],
    };

    return (
      <Bar
        data={test}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${selectedCountry}` },
        }}
      />
    );
  };
  return (
    <div className={styles.container}>
      {!selectedCountry && dailyData && lineChart()}
      {selectedCountry && data && barChart()}
    </div>
  );
};

export default Chart;
