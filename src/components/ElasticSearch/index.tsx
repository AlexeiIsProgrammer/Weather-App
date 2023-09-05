import Button from '@components/UI/Button';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import { fetchWeather } from '@store/reducers/ActionCreators';
import weatherSelector from '@store/selectors';
import React, { useCallback, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Input from '@components/UI/Input';

import { ElasticSearchContainer } from './styles';

function ElasticSearch() {
  const [inputCity, setInputCity] = useState<string>('');
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | number>(0);

  const { error, weather } = useAppSelector(weatherSelector);
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
    <ElasticSearchContainer>
      <ErrorBoundary fallback={<h1>Input is broken</h1>}>
        <Input
          error={error}
          onChange={onChangeHandler}
          value={inputCity}
          placeholder="Write country here"
        />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<h1>Input text and wait 2 seconds for searching</h1>}
      >
        <Button
          onClick={() => {
            if (inputCity !== weather?.location?.name) {
              clearTimeout(timer);
              dispatch(fetchWeather(inputCity));
            }
          }}
        >
          Find Country
        </Button>
      </ErrorBoundary>
    </ElasticSearchContainer>
  );
}

export default ElasticSearch;
