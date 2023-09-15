import Button from '@components/UI/Button';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import weatherSelector from '@store/selectors';
import React, { useCallback, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Input from '@components/UI/Input';
import { weatherFetching } from '@store/reducers/weatherSlice';

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
        dispatch(weatherFetching(inputCity));
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
        fallback={<h1>Input text and wait 2 seconds for applying</h1>}
      >
        <Button
          onClick={() => {
            dispatch({ type: 'CLICK' });

            if (inputCity !== weather?.location?.name) {
              clearTimeout(timer);
              dispatch(weatherFetching(inputCity));
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
