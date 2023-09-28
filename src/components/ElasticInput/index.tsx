import React, { useCallback, useEffect } from 'react';
import Input from '@Components/UI/Input';
import { useAppDispatch, useAppSelector } from '@Hooks/redux';
import { weatherFetching } from '@Store/slices/weatherSlice';
import weatherSelector from '@Store/selectors';

import { ElasticInputProps } from './types/types';

function ElasticInput({
  inputCity,
  setInputCity,
  timer,
  setTimer,
}: ElasticInputProps) {
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
        dispatch(weatherFetching(inputCity));
      }, 2000);

      setTimer(newTimer);
    }
  }, [inputCity]);

  return (
    <Input
      error={error}
      onChange={onChangeHandler}
      value={inputCity}
      placeholder="Write country here"
    />
  );
}

export default ElasticInput;
