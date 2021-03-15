import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../apis/index';

import styles from './CountryPicker.css';

const CountryPicker = ({ handleChangeSelector }) => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetchCountries();
      setCountries(response);
    })();
  }, []);

  const renderSelectorOptions = () => {
    return countries.map(({ name }) => (
      <option value={name} key={name}>
        {name}
      </option>
    ));
  };

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => handleChangeSelector(e.target.value)}>
        <option value=''>Global</option>
        {countries && renderSelectorOptions()}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
