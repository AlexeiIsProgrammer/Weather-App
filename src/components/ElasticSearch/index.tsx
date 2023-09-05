import React, { useCallback, useEffect, useState } from 'react';

import Input from '../UI/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchWeather } from '../../store/reducers/ActionCreators';
import weatherSelector from '../../store/selectors';

function ElasticSearch() {
  const [inputCity, setInputCity] = useState<string>('');
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | number>(0);

  const { error } = useAppSelector(weatherSelector);
  const dispatch = useAppDispatch();

  const onChangeHandler = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;

      setInputCity(target.value);
    },
    []
  );

  useEffect(() => {
    clearTimeout(timer);
    if (inputCity !== '') {
      const newTimer = setTimeout(() => {
        dispatch(fetchWeather(inputCity));
      }, 2000);

      setTimer(newTimer);
    }
  }, [inputCity]);

  return (
    <Input
      error={error}
      onChange={onChangeHandler}
      value={inputCity}
      placeholder="Country"
    />
  );
}

export default ElasticSearch;
