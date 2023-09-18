import Input from '@components/UI/Input';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { weatherFetching } from '@store/slices/weatherSlice';
import weatherSelector from '@store/selectors';
import React, { useCallback, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

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
    [],
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
    <ErrorBoundary fallback={<h1>Input is broken</h1>}>
      <Input
        error={error}
        onChange={onChangeHandler}
        value={inputCity}
        placeholder="Write country here"
      />
    </ErrorBoundary>
  );
}

export default ElasticInput;
