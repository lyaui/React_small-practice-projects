import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart({ dataPoint }) {
  const maxValue = Math.max(...dataPoint.map((data) => data.value));

  return (
    <div className='chart'>
      {dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
