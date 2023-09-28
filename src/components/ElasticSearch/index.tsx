import React, { useState } from 'react';
import Button from '@Components/UI/Button';
import { useAppSelector, useAppDispatch } from '@Hooks/redux';
import weatherSelector from '@Store/selectors';
import { weatherFetching } from '@Store/slices/weatherSlice';
import ElasticInput from '@Components/ElasticInput';

import { ElasticSearchContainer } from './styles';

function ElasticSearch() {
  const [inputCity, setInputCity] = useState<string>('');
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | number>(0);

  const { weather } = useAppSelector(weatherSelector);
  const dispatch = useAppDispatch();

  const searchCityHandler = () => {
    if (inputCity !== weather.location.name) {
      clearTimeout(timer);
      dispatch(weatherFetching(inputCity));
    }
  };

  return (
    <ElasticSearchContainer>
      <ElasticInput
        inputCity={inputCity}
        setInputCity={setInputCity}
        timer={timer}
        setTimer={setTimer}
      />
      <Button onClick={searchCityHandler}>Find Country</Button>
    </ElasticSearchContainer>
  );
}

export default ElasticSearch;
