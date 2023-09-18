import Button from '@components/UI/Button';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import weatherSelector from '@store/selectors';
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { weatherFetching } from '@store/reducers/weatherSlice';
import ElasticInput from '@components/ElasticInput';

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
