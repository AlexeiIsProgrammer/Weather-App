import Button from '@Components/UI/Button';
import { useAppSelector, useAppDispatch } from '@Hooks/redux';
import weatherSelector from '@Store/selectors';
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { weatherFetching } from '@Store/slices/weatherSlice';
import ElasticInput from '@Components/ElasticInput';

import { ElasticSearchContainer } from './styles';

function ElasticSearch() {
  const [inputCity, setInputCity] = useState<string>('');
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | number>(0);

  const { weather } = useAppSelector(weatherSelector);
  const dispatch = useAppDispatch();

  return (
    <ElasticSearchContainer>
      <ElasticInput
        inputCity={inputCity}
        setInputCity={setInputCity}
        timer={timer}
        setTimer={setTimer}
      />
      <ErrorBoundary
        fallback={<h1>Input text and wait 2 seconds for applying</h1>}
      >
        <Button
          onClick={() => {
            if (inputCity !== weather.location.name) {
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
